import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    //allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Auth-Token', 'Content-Length', 'X-JSON'],
    allowedHeaders: 'Content-Type, Authorization, Accept, Origin, X-Auth-Token, Content-Length, X-JSON, Observe',
    //allowedHeaders: ['origin', 'x-requested-with', 'content-type', 'accept', 'authorization', 'Access-Control-Allow-Origin', '*'],
    // allowedHeaders: [],
    origin: ['https://vladimir-kozinsky.github.io', 'https://vladimir-kozinsky.github.io/', 'https://vladimir-kozinsky.github.io/*', 'https://www.vladimir-kozinsky.github.io/*', 'https://www.vladimir-kozinsky.github.io', 'http://localhost:3000'],
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS, UPDATE",
  })
  // somewhere in your initialization file
  app.use(cookieParser());
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('Docs Rest API')
    .setVersion('1.0.0')
    .addTag('User')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document)
  app.useGlobalPipes(new ValidationPipe());
  //await app.listen(5000);
  await app.listen(process.env.PORT, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
