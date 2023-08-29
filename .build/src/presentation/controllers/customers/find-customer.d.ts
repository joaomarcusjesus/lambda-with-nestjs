import { FindCustomer, FindCustomerInput, FindCustomerOutput } from '../../../use-cases/customers';
import { Controller } from '../../../presentation/contracts/controller';
import { HttpResponse } from '../../../presentation/helpers/http';
type HttpRequest = FindCustomerInput;
type Model = FindCustomerOutput;
export declare class FindCustomerController extends Controller {
    private readonly service;
    constructor(service: FindCustomer);
    perform(httpRequest: HttpRequest): Promise<HttpResponse<Model>>;
}
export {};
