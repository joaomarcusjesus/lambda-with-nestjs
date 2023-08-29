import { FindCustomerRepository } from '../contracts/repository';
import { UpdateCustomerRepository } from '../contracts/repository/update-customer-repository';
export type UpdateCustomerInput = {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
};
export type UpdateCustomerOutput = void;
export declare class UpdateCustomer {
    private readonly updateCustomerRepository;
    private readonly findCustomerRepository;
    constructor(updateCustomerRepository: UpdateCustomerRepository, findCustomerRepository: FindCustomerRepository);
    execute(input: UpdateCustomerInput): Promise<UpdateCustomerOutput>;
}
