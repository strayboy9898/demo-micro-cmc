import { Injectable } from '@nestjs/common';
import {User} from "../../auth-service/src/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {StorageEntity} from "./storage.entity";

@Injectable()
export class StorageService {
  constructor(
      @InjectRepository(StorageEntity)
      private storageRepository: Repository<StorageEntity>,
  ) {}

  getAllItem(): Promise<StorageEntity[]> {
    return this.storageRepository.find();
  }
}
