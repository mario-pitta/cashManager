/* eslint-disable prettier/prettier */
import { LabelsModule } from "./app/labels/labels.module";
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { UserModule } from "./app/user/user.module";
import { AccountModule } from "./app/account/account.module";
import { TransactionsModule } from "./app/transactions/transactions.module";

import { DataBase } from "./core/database";
import { AuthModule } from "./app/auth/auth.module";
import { BanksModule } from "./app/banks/banks.module";

@Module({
	imports: [
		LabelsModule, 
		TransactionsModule, 
		BanksModule,
		AccountModule, 
		UserModule, 
		AuthModule],
	controllers: [AppController],
	providers: [AppService, DataBase],
})
export class AppModule {}
