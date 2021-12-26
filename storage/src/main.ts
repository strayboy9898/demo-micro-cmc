import { NestFactory } from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import { StorageModule } from "./storage.module";

async function bootstrap() {
  const port = 8001;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(StorageModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'storage_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen();
  console.log("Microservice - Storage Service is listening in port " + port);
}
bootstrap();