import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Get('/health-check')
  async healthCheck() {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Hello World' }),
    };
  }
}
