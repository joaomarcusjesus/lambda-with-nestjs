import { ListCustomerRepository } from '@/use-cases/contracts/repository';
import { mockCustomer } from '../../../../domain/models/customer-mock';

export class MockListCustomerRepository implements ListCustomerRepository {
  async list(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _input: ListCustomerRepository.Input,
  ): Promise<ListCustomerRepository.Output> {
    return [mockCustomer()];
  }
}
