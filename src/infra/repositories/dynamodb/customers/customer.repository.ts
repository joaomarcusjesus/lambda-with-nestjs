import {
  CreateCustomerRepository,
  DeleteCustomerRepository,
  FindCustomerRepository,
  UpdateCustomerRepository,
} from '../../../../use-cases/contracts/repository';
import { ListCustomerRepository } from '../../../../use-cases/contracts/repository/list-customer-repository';
import { CustomerMapper } from '../mappers/customer.mapper';
import { PersistError } from '../helpers/errors';
import { v4 as uuidv4 } from 'uuid';
import { Injectable, NotFoundException } from '@nestjs/common';
import { DynamoDbRepository } from '../helpers/repository';
import { FindByEmailCustomerRepository } from '@/use-cases/contracts/repository/find-by-email-customer-repository';
import { CustomerEntity } from '../entities/customer.entity';

@Injectable()
export class DynamodbCustomerRepository
  extends DynamoDbRepository
  implements
    ListCustomerRepository,
    FindCustomerRepository,
    CreateCustomerRepository,
    UpdateCustomerRepository,
    DeleteCustomerRepository,
    FindByEmailCustomerRepository
{
  public tableName = 'customers';

  async list(
    input?: ListCustomerRepository.Input,
  ): Promise<ListCustomerRepository.Output> {
    type filter = {
      FilterExpression?: string;
      TableName: string;
      ExpressionAttributeValues?: any;
    };

    const scanParams: filter = {
      TableName: this.tableName,
    };

    if (input?.search) {
      // eslint-disable-next-line max-len
      scanParams.FilterExpression =
        // eslint-disable-next-line max-len
        'contains(id, :search) OR contains(first_name, :search) OR contains(last_name, :search) OR contains(email, :search) OR contains(phone, :search)';
      scanParams.ExpressionAttributeValues = {
        ':search': input.search,
      };
    }

    const entities = await this.getConnection().scan(scanParams).promise();
    const result = entities?.Items;

    if (!result || !entities) {
      return [];
    }

    return result.map((entity: CustomerEntity) => CustomerMapper.ToDomain(entity));
  }

  async find(
    input: FindCustomerRepository.Input,
  ): Promise<FindCustomerRepository.Output> {
    const params = {
      TableName: this.tableName,
      Key: {
        id: input.uuid,
      },
    };

    const result = await this.getConnection().get(params).promise();

    if (!result.Item) {
      throw new NotFoundException();
    }

    return CustomerMapper.ToDomain(result?.Item as CustomerEntity);
  }

  async findByEmail(
    input: FindByEmailCustomerRepository.Input,
  ): Promise<FindByEmailCustomerRepository.Output> {
    type filter = {
      FilterExpression?: string;
      TableName: string;
      ExpressionAttributeValues?: any;
    };

    const scanParams: filter = {
      TableName: this.tableName,
    };

    scanParams.FilterExpression = 'contains(email, :email)';
    scanParams.ExpressionAttributeValues = {
      ':email': input.email,
    };

    const entities = await this.getConnection().scan(scanParams).promise();
    const result = entities?.Items;

    if (!result || !result[0]) {
      throw new NotFoundException();
    }

    return CustomerMapper.ToDomain(result[0] as CustomerEntity);
  }

  async create(
    input: CreateCustomerRepository.Input,
  ): Promise<CreateCustomerRepository.Output> {
    const params = {
      TableName: this.tableName,
      Item: {
        ...input,
        id: uuidv4(),
      },
    };

    const result = await this.getConnection().put(params).promise();

    if (!result) {
      throw new PersistError();
    }

    return;
  }

  async update(
    input: UpdateCustomerRepository.Input,
  ): Promise<UpdateCustomerRepository.Output> {
    const params = {
      TableName: this.tableName,
      Key: {
        id: input.uuid,
      },
      UpdateExpression:
        'set email = :email, first_name = :first_name, last_name = :last_name, phone = :phone',
      ExpressionAttributeValues: {
        ':email': input.email,
        ':first_name': input.first_name,
        ':last_name': input.last_name,
        ':phone': input.phone,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    const result = await this.getConnection().update(params).promise();

    if (!result) {
      throw new PersistError();
    }

    return;
  }

  async delete(
    input: DeleteCustomerRepository.Input,
  ): Promise<DeleteCustomerRepository.Output> {
    const params = {
      TableName: this.tableName,
      Key: {
        id: input.uuid,
      },
    };

    const result = await this.getConnection().delete(params).promise();

    if (!result) {
      throw new PersistError();
    }

    return;
  }
}
