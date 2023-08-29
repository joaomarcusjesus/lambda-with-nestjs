import { ListCustomer, ListCustomerInput, ListCustomerOutput } from '../../../use-cases/customers';
import { Controller } from '../../../presentation/contracts/controller';
import { HttpResponse } from '../../../presentation/helpers/http';
type HttpRequest = ListCustomerInput;
type Model = ListCustomerOutput;
export declare class ListCustomerController extends Controller {
    private readonly service;
    constructor(service: ListCustomer);
    perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>>;
}
export {};
