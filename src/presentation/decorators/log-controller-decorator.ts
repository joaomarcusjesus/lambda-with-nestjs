import { Controller } from '../contracts/controller';
import { HttpResponse } from '../../presentation/helpers/http';
import { LoggerService } from '@/infra/logger/logger.service';

export class LogControllerDecorator extends Controller {
  constructor(private readonly decoratee: Controller) {
    super();
  }

  async perform(httpRequest: any): Promise<HttpResponse> {
    try {
      const httpResponse = await this.decoratee.perform(httpRequest);
      return httpResponse;
    } catch (error) {
      LoggerService.error(
        'Internal server error',
        JSON.stringify({
          endpointInfo: httpRequest.endpointInfo,
          error: error.toString(),
          payload: JSON.stringify(httpRequest),
        }),
      );

      throw error;
    }
  }
}
