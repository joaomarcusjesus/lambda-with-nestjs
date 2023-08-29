import { Customer } from '../../domain/models/customer';
import { ListCustomerRepository } from '../contracts/repository/list-customer-repository';
export type ListCustomerInput = {
    search?: string;
};
export type ListCustomerOutput = Customer[];
export declare class ListCustomer {
    private readonly repository;
    constructor(repository: ListCustomerRepository);
    execute(input: ListCustomerInput): Promise<ListCustomerOutput>;
}
