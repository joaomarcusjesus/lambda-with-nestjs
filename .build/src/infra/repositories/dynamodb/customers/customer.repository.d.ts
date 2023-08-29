import { CreateCustomerRepository, DeleteCustomerRepository, FindCustomerRepository, UpdateCustomerRepository } from '../../../../use-cases/contracts/repository';
import { ListCustomerRepository } from '../../../../use-cases/contracts/repository/list-customer-repository';
import IDynamoDBClient from '../helpers/dynamodb-client';
export declare class CustomerRepository implements ListCustomerRepository, FindCustomerRepository, CreateCustomerRepository, UpdateCustomerRepository, DeleteCustomerRepository {
    dynamoDB: IDynamoDBClient;
    tableName: string;
    constructor(dynamoDBClient: IDynamoDBClient);
    list(input?: ListCustomerRepository.Input): Promise<ListCustomerRepository.Output>;
    find(input: FindCustomerRepository.Input): Promise<FindCustomerRepository.Output>;
    create(input: CreateCustomerRepository.Input): Promise<CreateCustomerRepository.Output>;
    update(input: UpdateCustomerRepository.Input): Promise<UpdateCustomerRepository.Output>;
    delete(input: DeleteCustomerRepository.Input): Promise<DeleteCustomerRepository.Output>;
}
