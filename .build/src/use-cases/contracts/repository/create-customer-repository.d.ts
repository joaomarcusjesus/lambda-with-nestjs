export declare abstract class CreateCustomerRepository {
    abstract create(input: CreateCustomerRepository.Input): Promise<CreateCustomerRepository.Output>;
}
export declare namespace CreateCustomerRepository {
    type Input = {
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
    };
    type Output = void;
}
