export declare abstract class DeleteCustomerRepository {
    abstract delete(input: DeleteCustomerRepository.Input): Promise<DeleteCustomerRepository.Output>;
}
export declare namespace DeleteCustomerRepository {
    type Input = {
        uuid: string;
    };
    type Output = void;
}
