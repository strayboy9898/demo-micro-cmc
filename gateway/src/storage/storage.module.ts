import { Module } from '@nestjs/common';
import {ClientsModule, Transport} from "@nestjs/microservices";
import {GatewayStorageService} from "./storage.service";
import {GatewayStorageController} from "./storage.controller";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "STORAGE_SERVICE",
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'storage_queue',
          queueOptions: {
            durable: false
          },
        },
      }
    ]),
  ],
  controllers: [GatewayStorageController],
  providers: [GatewayStorageService]
})
export class StorageModule {}