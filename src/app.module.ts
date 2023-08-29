import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CustomerRoutesModule } from './main/modules/customers/customer-routes.module';

@Module({
  imports: [CustomerRoutesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
