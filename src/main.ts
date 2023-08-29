import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.setGlobalPrefix('/api/v1');

  const port = process.env.PORT || 3001;

  const config = new DocumentBuilder()
    .setTitle('Lambda - customers')
    .setDescription('the api is consumed by other services and by the client itself')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT', // Specify the format of the token (optional)
      in: 'header', // Specify where the token should be included ('header' or 'query')
      name: 'Authorization', // Name of the header or query parameter
      description: 'Enter your JWT token',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}
bootstrap();
