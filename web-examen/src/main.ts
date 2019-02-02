import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as ejs from 'ejs';
import * as express from 'express';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.set('view engine', 'ejs');
  app.use(express.static('publico'));
  await app.listen(3000);
}
bootstrap();

