import { Module } from '@nestjs/common';
import { StorageController } from './storage.controller';
import { StorageService } from './storage.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule} from "@nestjs/config";
import {StorageEntity} from "./storage.entity";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.storage.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.userDB,
      password: process.env.passDB,
      database: process.env.nameDB,
      entities: [StorageEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([StorageEntity]),
  ],
  controllers: [StorageController],
  providers: [StorageService],
})
export class StorageModule {}