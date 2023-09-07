import { FindCustomerRepository } from '@/use-cases/contracts/repository';
import { mockCustomer } from '../../../../domain/models/customer-mock';

export class MockFindCustomerRepository implements FindCustomerRepository {
  async find(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _input: FindCustomerRepository.Input,
  ): Promise<FindCustomerRepository.Output> {
    return mockCustomer();
  }
}
