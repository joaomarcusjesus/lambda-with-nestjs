import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { JwtModule } from './infra/jwt/jwt.module';
import { AuthRoutesModule } from './main/modules/auth/auth-routes.module';
import { CustomerRoutesModule } from './main/modules/customers/customer-routes.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    CustomerRoutesModule,
    AuthRoutesModule,
    JwtModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
