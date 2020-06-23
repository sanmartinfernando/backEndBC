import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { json } from 'body-parser';




async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.useStaticAssets(join(__dirname, '..', 'uploads'));
  app.use(json({ limit: '50mb'}));
  await app.listen(3000);
}

bootstrap();
