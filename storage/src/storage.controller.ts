import { Controller, Get } from '@nestjs/common';
import { StorageService } from './storage.service';
import {MessagePattern} from "@nestjs/microservices";

@Controller()
export class StorageController {
  constructor(private readonly storageService: StorageService) {}

  @MessagePattern({ cmd: "getAllItem" })
  signUp(): any {
    return this.storageService.getAllItem();
  }
}
