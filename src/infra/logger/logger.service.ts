import { Logger } from '@nestjs/common';
import { WinstonService } from './winston.service';

export class LoggerService {
  private static logOnWinston(
    context: string,
    method: Exclude<keyof WinstonService, 'logger'>,
    params: any,
  ) {
    if (process.env.NODE_ENV !== 'local' && process.env.NODE_ENV !== 'test')
      new WinstonService(context)[method](params);
  }

  static error(context: string, error: any) {
    Logger.error(error);
    this.logOnWinston(context, 'error', error);
  }

  static log(context: string, message: any) {
    Logger.log(message);
    this.logOnWinston(context, 'log', message);
  }

  static warn(context: string, message: any) {
    Logger.warn(message);
    this.logOnWinston(context, 'warn', message);
  }

  static info(context: string, text: any, params?: any): void {
    Logger.verbose(text);
    this.logOnWinston(context, 'log', { message: text, additionalInfo: params });
  }

  static debug(context: string, text: any): void {
    Logger.debug(text);
    this.logOnWinston(context, 'log', text);
  }
}
