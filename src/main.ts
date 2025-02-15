import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'dotenv';
import * as cors from 'cors';

config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({whitelist:true, forbidNonWhitelisted:true}))
  app.use(cors({ origin: '*' }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
