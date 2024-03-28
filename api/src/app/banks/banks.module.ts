/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { BanksController } from "./banks.controller";
import { BankService } from "./banks.service";

@Module({
    imports: [],
    controllers: [BanksController],
    providers: [BankService]
})
export class BanksModule { }