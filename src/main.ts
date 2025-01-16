import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from "@nestjs/platform-express";

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });

  await app.listen(process.env.PORT);
  console.log(`App running on port ${process.env.PORT}`);
}

start().catch(error => console.log(error));
