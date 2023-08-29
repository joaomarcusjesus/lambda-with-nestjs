import { HttpResponse } from '../../../presentation/helpers/http';
import { CreateCustomer, CreateCustomerInput, CreateCustomerOutput } from '../../../use-cases/customers/create-customer';
import { Controller } from '../../../presentation/contracts/controller';
type HttpRequest = CreateCustomerInput;
type Model = CreateCustomerOutput;
export declare class CreateCustomerController extends Controller {
    private readonly service;
    constructor(service: CreateCustomer);
    perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>>;
}
export {};
