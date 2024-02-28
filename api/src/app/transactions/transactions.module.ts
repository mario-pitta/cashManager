/* eslint-disable prettier/prettier */

/*
https://docs.nestjs.com/modules
*/

import { Module } from "@nestjs/common";
import { TransactionsService } from "./transactions.service";
import { TransactionsController } from "./transactions.controller";

@Module({
	imports: [],
	controllers: [TransactionsController],
	providers: [TransactionsService],
})
export class TransactionsModule {}
