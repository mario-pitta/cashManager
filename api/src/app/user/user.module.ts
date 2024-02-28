/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DataBase } from 'src/core/database';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, DataBase],
})
export class UserModule {}
