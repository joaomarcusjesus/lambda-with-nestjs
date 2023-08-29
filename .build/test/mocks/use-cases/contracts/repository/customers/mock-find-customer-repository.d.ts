import { FindCustomerRepository } from '@/use-cases/contracts/repository';
export declare class MockFindCustomerRepository implements FindCustomerRepository {
    find(_input: FindCustomerRepository.Input): Promise<FindCustomerRepository.Output>;
}
