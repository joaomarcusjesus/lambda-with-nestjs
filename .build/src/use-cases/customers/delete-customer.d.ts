import { DeleteCustomerRepository } from '../contracts/repository/delete-customer-repository';
export type DeleteCustomerInput = {
    uuid: string;
};
export type DeleteCustomerOutput = void;
export declare class DeleteCustomer {
    private readonly repository;
    constructor(repository: DeleteCustomerRepository);
    execute(input: DeleteCustomerInput): Promise<DeleteCustomerOutput>;
}
