/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DataBase } from "src/core/database";

@Injectable()
export class AuthService extends DataBase {
	constructor() {
		super();
	}

	async login(email: string, password: string) {
		const { data, error } = await this.supabase
			.from("pessoas")
			.select("*")
			.eq("email", email)
			.eq("senha", password);
        console.log(data, error)
		return { data, error };
	}
}
