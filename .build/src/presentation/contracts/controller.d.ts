import { HttpResponse } from '../../presentation/helpers/http';
export declare abstract class Controller {
    abstract perform(httpRequest: any): Promise<HttpResponse>;
}
