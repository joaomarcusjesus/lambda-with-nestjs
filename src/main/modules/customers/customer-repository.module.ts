import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';
import {
  CreateCustomerRepository,
  DeleteCustomerRepository,
  FindCustomerRepository,
  ListCustomerRepository,
  UpdateCustomerRepository,
} from '@/use-cases/contracts/repository';
import { FindByEmailCustomerRepository } from '@/use-cases/contracts/repository/find-by-email-customer-repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [],
  providers: [
    DynamodbCustomerRepository,
    {
      provide: ListCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
    {
      provide: FindCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
    {
      provide: CreateCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
    {
      provide: DeleteCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
    {
      provide: UpdateCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
    {
      provide: FindByEmailCustomerRepository,
      useClass: DynamodbCustomerRepository,
    },
  ],
  exports: [
    ListCustomerRepository,
    FindCustomerRepository,
    CreateCustomerRepository,
    DeleteCustomerRepository,
    UpdateCustomerRepository,
    FindByEmailCustomerRepository,
  ],
})
export class CustomerRepositoryModule {}
