import { HttpResponse } from '../../../presentation/helpers/http';
import { DeleteCustomer, DeleteCustomerInput, DeleteCustomerOutput } from '../../../use-cases/customers/delete-customer';
import { Controller } from '../../../presentation/contracts/controller';
type HttpRequest = DeleteCustomerInput;
type Model = DeleteCustomerOutput;
export declare class DeleteCustomerController extends Controller {
    private readonly service;
    constructor(service: DeleteCustomer);
    perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>>;
}
export {};
