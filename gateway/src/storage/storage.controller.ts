import {Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards} from '@nestjs/common';
//import { StorageService } from './storage.service';
import { CreateStorageDto } from './dto/create-storage.dto';
import { UpdateStorageDto } from './dto/update-storage.dto';
import {ClientProxy} from "@nestjs/microservices";
import {JwtAuthGuard} from "../jwt-auth.guard";

@Controller('/gateway/storage')
export class GatewayStorageController {
  constructor(
      @Inject("STORAGE_SERVICE") private readonly storageService: ClientProxy,
      //private readonly storageService: StorageService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('/')
  getAllItems() {
    const pattern = { cmd: "getAllItem" };
    return this.storageService.send(pattern, {});
  }
}
