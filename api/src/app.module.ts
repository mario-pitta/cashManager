/* eslint-disable prettier/prettier */
import { LabelsModule } from "./app/labels/labels.module";
import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";

import { UserModule } from "./app/user/user.module";
import { AccountModule } from "./app/account/account.module";
import { TransactionsModule } from "./app/transactions/transactions.module";

import { DataBase } from "./core/database";

@Module({
	imports: [LabelsModule, TransactionsModule, AccountModule, UserModule],
	controllers: [AppController],
	providers: [AppService, DataBase],
})
export class AppModule {}
