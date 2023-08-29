import { CreateCustomerRepository } from '../contracts/repository/create-customer-repository';
export type CreateCustomerInput = {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
};
export type CreateCustomerOutput = void;
export declare class CreateCustomer {
    private readonly repository;
    constructor(repository: CreateCustomerRepository);
    execute(input: CreateCustomerInput): Promise<CreateCustomerOutput>;
}
