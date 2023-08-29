export declare abstract class UpdateCustomerRepository {
    abstract update(input: UpdateCustomerRepository.Input): Promise<UpdateCustomerRepository.Output>;
}
export declare namespace UpdateCustomerRepository {
    type Input = {
        uuid: string;
        first_name: string;
        last_name: string;
        email: string;
        phone: string;
    };
    type Output = void;
}
