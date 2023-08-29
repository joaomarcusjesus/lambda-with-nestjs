import { Customer } from '../../domain/models/customer';
import { FindCustomerRepository } from '../contracts/repository/find-customer-repository';
export type FindCustomerInput = {
    uuid: string;
};
export type FindCustomerOutput = Customer;
export declare class FindCustomer {
    private readonly repository;
    constructor(repository: FindCustomerRepository);
    execute(input: FindCustomerInput): Promise<FindCustomerOutput>;
}
