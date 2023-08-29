import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CredentialGateway } from '../contracts/gateway/credential-gateway';
import { FindByEmailCustomerRepository } from '../contracts/repository/find-by-email-customer-repository';
import * as bcrypt from 'bcrypt';
import { Credential } from '@/domain/models/credential';

export type SignInInput = {
  email: string;
  password: string;
};

export type SignInOutput = Credential;

@Injectable()
export class SignIn {
  constructor(
    private readonly gateway: CredentialGateway,
    private readonly repository: FindByEmailCustomerRepository,
  ) {}

  public async execute(input: SignInInput): Promise<SignInOutput> {
    const { email, password } = input;

    const customer = await this.repository.findByEmail({ email });
    const compare = await bcrypt.compare(password, customer.password);

    if (!compare) {
      throw new UnauthorizedException();
    }

    const payload = { user_id: customer.uuid, email: customer.email };

    return await this.gateway.create(payload);
  }
}
