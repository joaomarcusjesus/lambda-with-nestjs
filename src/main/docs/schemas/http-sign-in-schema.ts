import { ApiProperty } from '@nestjs/swagger';

export class HttpSignInSchema {
  @ApiProperty({
    type: 'string',
    description: 'Email',
    example: 'john@gmail.com',
  })
  email: string;

  @ApiProperty({
    type: 'string',
    description: 'Senha',
  })
  password: string;
}
