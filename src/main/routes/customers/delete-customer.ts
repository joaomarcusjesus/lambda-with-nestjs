import { adaptNestRouter } from '@/main/adapters/nest-router-adapter';
import { Controller, Delete, Param, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DeleteCustomerController } from '@/presentation/controllers/customers/delete-customer';
import { NotFoundErrorSchema } from '../../docs/components/not-found-error';
import { InternalServerErrorSchema } from '../../docs/components/internal-server-error';
import { BadRequestErrorSchema } from '../../docs/components/bad-request-error';

@ApiTags('Customers')
@Controller('customers')
export class DeleteCustomerRouter {
  constructor(private readonly controller: DeleteCustomerController) {}

  @Delete('/:id')
  @ApiOperation({
    summary: 'Deletar cliente por id',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
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
  async delete(@Param('id') uuid: number, @Res() response: Response) {
    return adaptNestRouter(this.controller)(
      {
        uuid: uuid,
      },
      response,
    );
  }
}
