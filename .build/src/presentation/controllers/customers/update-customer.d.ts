import { UpdateCustomer, UpdateCustomerInput, UpdateCustomerOutput } from '../../../use-cases/customers';
import { Controller } from '../../../presentation/contracts/controller';
import { HttpResponse } from '../../../presentation/helpers/http';
type HttpRequest = UpdateCustomerInput;
type Model = UpdateCustomerOutput;
export declare class UpdateCustomerController extends Controller {
    private readonly service;
    constructor(service: UpdateCustomer);
    perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>>;
}
export {};
