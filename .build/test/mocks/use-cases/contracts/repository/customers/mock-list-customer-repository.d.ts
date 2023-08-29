import { ListCustomerRepository } from '@/use-cases/contracts/repository';
export declare class MockListCustomerRepository implements ListCustomerRepository {
    list(_input: ListCustomerRepository.Input): Promise<ListCustomerRepository.Output>;
}
