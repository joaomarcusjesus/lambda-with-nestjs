import { UpdateCustomerRepository } from '@/use-cases/contracts/repository';
export declare class MockUpdateCustomerRepository implements UpdateCustomerRepository {
    update(_input: UpdateCustomerRepository.Input): Promise<UpdateCustomerRepository.Output>;
}
