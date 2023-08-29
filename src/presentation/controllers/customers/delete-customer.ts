import { HttpResponse, noContent } from '../../../presentation/helpers/http';
import {
  DeleteCustomer,
  DeleteCustomerInput,
  DeleteCustomerOutput,
} from '../../../use-cases/customers/delete-customer';
import { Controller } from '../../../presentation/contracts/controller';
import { Injectable } from '@nestjs/common';

type HttpRequest = DeleteCustomerInput;
type Model = DeleteCustomerOutput;

@Injectable()
export class DeleteCustomerController extends Controller {
  constructor(private readonly service: DeleteCustomer) {
    super();
  }

  async perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>> {
    await this.service.execute(httpRequest);
    return noContent();
  }
}
