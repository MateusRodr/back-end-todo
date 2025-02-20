import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
import * as cors from 'cors';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Application created');
  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true}))
  app.use(cors({ origin: '*' }));
  const port = process.env.PORT || 3000;
  console.log(`Application listening on port ${port}`);
  await app.listen(port);
}
bootstrap();
