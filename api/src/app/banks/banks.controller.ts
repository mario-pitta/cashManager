/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";
import { BankService } from "./banks.service";

@Controller("banks")
export class BanksController {
    constructor(readonly service: BankService) { }

    @Get()
    getAll() {
        return this.service.getAll();
    }
}
