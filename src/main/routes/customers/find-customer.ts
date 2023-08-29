import { adaptNestRouter } from '@/main/adapters/nest-router-adapter';
import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { FindCustomerController } from '@/presentation/controllers/customers/find-customer';
import { BadRequestErrorSchema } from '../../docs/components/bad-request-error';
import { NotFoundErrorSchema } from '../../docs/components/not-found-error';
import { InternalServerErrorSchema } from '../../docs/components/internal-server-error';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiParam,
} from '@nestjs/swagger';
import { HttpCustomerFindSchema } from '@/main/docs/schemas/http-customer-find-schema';

@ApiTags('Customers')
@Controller('customers')
export class FindCustomerRouter {
  constructor(private readonly controller: FindCustomerController) {}

  @Get('/:id')
  @ApiOperation({
    summary: 'Buscar cliente por id',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Schema de retorno da busca de um cliente.',
    type: HttpCustomerFindSchema,
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
  @ApiParam({
    name: 'id',
    required: true,
    type: 'number',
    description: 'Cliente id',
    example: 1,
  })
  async find(@Param('id') uuid: number, @Res() response: Response) {
    return adaptNestRouter(this.controller)(
      {
        uuid: uuid,
      },
      response,
    );
  }
}
