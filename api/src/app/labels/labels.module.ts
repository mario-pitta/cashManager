/* eslint-disable prettier/prettier */
/*https://docs.nestjs.com/modules*/

import { Module } from "@nestjs/common";

import { LabelsService } from "./labels.service";
import { LabelsController } from "./labels.controller";

@Module({
	imports: [],
	controllers: [LabelsController],
	providers: [LabelsService],
})
export class LabelsModule {}
