import { CreateCustomerRepository } from '@/use-cases/contracts/repository';

export class MockCreateCustomerRepository implements CreateCustomerRepository {
  async create(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _input: CreateCustomerRepository.Input,
  ): Promise<CreateCustomerRepository.Output> {
    return;
  }
}
