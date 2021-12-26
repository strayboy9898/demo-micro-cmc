import { NestFactory } from "@nestjs/core";
import {MicroserviceOptions, Transport} from "@nestjs/microservices";
import { AuthModule } from "./auth.module";

async function bootstrap() {
  const port = 8000;
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AuthModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'auth_queue',
      queueOptions: {
        durable: false
      },
    },
  });
  app.listen();
  console.log("Microservice Authentication is listening in port " + port);
}
bootstrap();