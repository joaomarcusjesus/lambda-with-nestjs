import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('/hello')
  async hello() {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello' }),
    };
  }
}
