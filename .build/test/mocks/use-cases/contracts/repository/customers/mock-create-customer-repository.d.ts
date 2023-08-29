import { CreateCustomerRepository } from '@/use-cases/contracts/repository';
export declare class MockCreateCustomerRepository implements CreateCustomerRepository {
    create(_input: CreateCustomerRepository.Input): Promise<CreateCustomerRepository.Output>;
}
