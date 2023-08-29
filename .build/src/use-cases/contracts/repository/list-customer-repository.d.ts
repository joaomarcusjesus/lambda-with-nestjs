import { Customer } from '../../../domain/models/customer';
export declare abstract class ListCustomerRepository {
    abstract list(input?: ListCustomerRepository.Input): Promise<ListCustomerRepository.Output>;
}
export declare namespace ListCustomerRepository {
    type Input = {
        search?: string;
    };
    type Output = Customer[];
}
