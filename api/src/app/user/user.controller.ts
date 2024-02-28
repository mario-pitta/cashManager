/* eslint-disable prettier/prettier */
import {
	Controller,
	Get,
	Post,
	Put,
	Delete,
	Param,
	Body,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { Pessoa } from "src/core/models/Pessoa";

@Controller("user")
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Post()
	create(@Body() body: Pessoa) {
		return this.userService.create(body);
	}

	@Get()
	findAll() {
		return this.userService.findAll();
	}

	@Get("/:id")
	find(@Param("id") id: number) {
		return this.userService.findById(id);
	}

	@Put()
	update(@Body() body: any) {
		return this.userService.update(body);
	}

	@Delete("/:id")
	delete(@Param("id") id: number) {
		return this.userService.delete(id);
	}
}
