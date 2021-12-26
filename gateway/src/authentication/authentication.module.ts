import { Module } from '@nestjs/common';
import { GatewayAuthenticationService } from './authentication.service';
import { GatewayAuthenticationController } from './authentication.controller';
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "AUTH_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'auth_queue',
          queueOptions: {
            durable: false
          },
        },
      }
    ]),
  ],
  controllers: [GatewayAuthenticationController],
  providers: [GatewayAuthenticationService]
})
export class AuthenticationModule {}
