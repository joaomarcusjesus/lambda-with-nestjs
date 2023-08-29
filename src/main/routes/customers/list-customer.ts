import { adaptNestRouter } from '@/main/adapters/nest-router-adapter';
import { ListCustomerController } from '@/presentation/controllers/customers/list-customer';
import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { HttpCustomerListSchema } from '../../docs/schemas/http-customer-list-schema';
import { BadRequestErrorSchema } from '../../docs/components/bad-request-error';
import { NotFoundErrorSchema } from '../../docs/components/not-found-error';
import { InternalServerErrorSchema } from '../../docs/components/internal-server-error';

@ApiTags('Customers')
@Controller('customers')
export class ListCustomerRouter {
  constructor(private readonly controller: ListCustomerController) {}

  @Get('/')
  @ApiOperation({
    summary: 'Lista clientes',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Schema de retorno da busca de um cliente.',
    type: HttpCustomerListSchema,
  })
  @ApiBadRequestResponse({
    status: HttpStatus.BAD_REQUEST,
    description: 'Bad request.',
    type: BadRequestErrorSchema,
  })
  @ApiNotFoundResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Not found.',
    type: NotFoundErrorSchema,
  })
  @ApiInternalServerErrorResponse({
    status: HttpStatus.INTERNAL_SERVER_ERROR,
    description: 'Internal server error.',
    type: InternalServerErrorSchema,
  })
  async list(@Res() response: Response) {
    return adaptNestRouter(this.controller)({}, response);
  }
}
