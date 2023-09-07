import { DeleteCustomerRepository } from '@/use-cases/contracts/repository';

export class MockDeleteCustomerRepository implements DeleteCustomerRepository {
  async delete(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _input: DeleteCustomerRepository.Input,
  ): Promise<DeleteCustomerRepository.Output> {
    return;
  }
}
