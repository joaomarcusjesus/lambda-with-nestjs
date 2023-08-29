import { adaptNestRouter } from '@/main/adapters/nest-router-adapter';
import { Body, Controller, Get, Param, Post, Put, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateCustomerController } from '@/presentation/controllers/customers/update-customer';
import { InternalServerErrorSchema } from '../../docs/components/internal-server-error';
import { NotFoundErrorSchema } from '../../docs/components/not-found-error';
import { BadRequestErrorSchema } from '../../docs/components/bad-request-error';
import { HttpNoContentSchema } from '../../docs/schemas/http-created-schema';
import { HttpCustomerBodySchema } from '../../docs/schemas/http-customer-body-schema';

@ApiTags('Customers')
@Controller('customers')
export class UpdateCustomerRouter {
  constructor(private readonly controller: UpdateCustomerController) {}

  @Put('/:id')
  @ApiOperation({
    summary: 'Atualizar um cliente por id',
  })
  @ApiBody({
    description: 'Corpo da requisição',
    type: HttpCustomerBodySchema,
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Schema de retorno da atualização de um cliente.',
    type: HttpNoContentSchema,
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
  async update(@Param('id') uuid: number, @Body() data, @Res() response: Response) {
    return adaptNestRouter(this.controller)(
      {
        first_name: data.first_name,
        email: data.email,
        phone: data.phone,
        last_name: data.last_name,
        uuid,
      },
      response,
    );
  }
}
