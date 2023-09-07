import { Request, Response } from 'express';
import { HttpStatus } from '@nestjs/common';
import { Controller } from '@/presentation/contracts/controller';
import { LogControllerDecorator } from '@/presentation/decorators/log-controller-decorator';

const makeLogControllerDecorator = (controller: Controller) => {
  return new LogControllerDecorator(controller);
};

type Adapter = (controller: Controller) => any;

export const adaptNestRouter: Adapter =
  (controller) => async (body: any, response: Response, request?: Request) => {
    const { statusCode, data = {} } = await makeLogControllerDecorator(controller).handle(
      {
        ...body,
        endpointInfo: request ? request.originalUrl : '',
      },
    );
    const json = [HttpStatus.OK, HttpStatus.CREATED, HttpStatus.NO_CONTENT].includes(
      statusCode,
    )
      ? {
          statusCode: statusCode,
          data: data,
        }
      : {
          statusCode: statusCode,
          message: data.messageClient ?? data.message,
          error: data.name,
        };
    response.status(statusCode).json(json);
  };
