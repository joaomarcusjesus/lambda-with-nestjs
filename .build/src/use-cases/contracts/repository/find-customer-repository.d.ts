import { Customer } from '../../../domain/models/customer';
export declare abstract class FindCustomerRepository {
    abstract find(input: FindCustomerRepository.Input): Promise<FindCustomerRepository.Output>;
}
export declare namespace FindCustomerRepository {
    type Input = {
        uuid: string;
    };
    type Output = Customer;
}
