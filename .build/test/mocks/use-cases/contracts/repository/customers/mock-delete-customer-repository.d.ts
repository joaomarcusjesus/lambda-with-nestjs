import { DeleteCustomerRepository } from '@/use-cases/contracts/repository';
export declare class MockDeleteCustomerRepository implements DeleteCustomerRepository {
    delete(_input: DeleteCustomerRepository.Input): Promise<DeleteCustomerRepository.Output>;
}
