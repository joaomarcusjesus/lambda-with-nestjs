import { Injectable } from '@nestjs/common';
import { DeleteCustomerRepository } from '../contracts/repository/delete-customer-repository';

export type DeleteCustomerInput = {
  uuid: string;
};
export type DeleteCustomerOutput = void;

@Injectable()
export class DeleteCustomer {
  constructor(private readonly repository: DeleteCustomerRepository) {}

  public async execute(input: DeleteCustomerInput): Promise<DeleteCustomerOutput> {
    await this.repository.delete({ uuid: input.uuid });
  }
}
