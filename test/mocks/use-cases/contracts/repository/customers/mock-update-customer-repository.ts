import { UpdateCustomerRepository } from '@/use-cases/contracts/repository';

export class MockUpdateCustomerRepository implements UpdateCustomerRepository {
  async update(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _input: UpdateCustomerRepository.Input,
  ): Promise<UpdateCustomerRepository.Output> {
    return;
  }
}
