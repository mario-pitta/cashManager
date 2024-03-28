/* eslint-disable prettier/prettier */
/*
https://docs.nestjs.com/providers#services
*/

import { IPessoa } from "src/core/models/Pessoa";
import { Injectable } from "@nestjs/common";
import { DataBase } from "src/core/database";

const tableName = "pessoas";
@Injectable()
/**
 * The `export class UserService extends DataBase {` statement is defining a class named `UserService` that extends another
 * class `DataBase`. By extending the `DataBase` class, the `UserService` class inherits all the properties and methods
 * defined in the `DataBase` class. This allows the `UserService` class to reuse functionality from the `DataBase` class
 * and also add its own specific methods and properties related to user service operations. Additionally, the `export`
 * keyword makes the `UserService` class available for use in other modules by exporting it from the current module.
 *
 * @class
 * @name UserService
 * @extends DataBase
 * @exports
 */
export class UserService extends DataBase {
	constructor() {
		super();
	}

	/**
	 * The `async create(user: Pessoa) {` method in the `UserService` class is a function that creates a new record in the
	 * database table named `pessoas`. It takes a parameter `user` of type `Pessoa` (which seems to be a model representing a
	 * person) and inserts this user data into the database table asynchronously using the Supabase client.
	 *
	 * @async
	 * @method
	 * @name create
	 * @memberof UserService
	 * @param {Pessoa} user
	 * @returns {Promise<PostgrestResponseFailure | PostgrestResponseSuccess<null>>}
	 */
	async create(user: IPessoa) {
		const created = await this.supabase
			.from(tableName)
			.insert(user)
			.select("*")
			.then((res) => res);

		return created;
	}

	/**
	 * The `async findAll()` method in the `UserService` class is a function that retrieves all records from the database table
	 * named `pessoas`. It uses the Supabase client to perform a select query on the `pessoas` table, specifically selecting
	 * the `nome` and `email` columns. The method returns a Promise that resolves to either a failure response or a success
	 * response containing an array of objects with `nome` and `email` properties.
	 *
	 * @async
	 * @method
	 * @name findAll
	 * @memberof UserService
	 * @returns {Promise<PostgrestResponseFailure | PostgrestResponseSuccess<{ nome: any; email: any; }[]>>}
	 */
	async findAll() {
		const created = await this.supabase
			.from(tableName)
			.select("nome, email")
			.then((res) => res);
		return created;
	}

	/**
	 * The `async findById(id: number) {` method in the `UserService` class is a function that retrieves a specific record from
	 * the database table named `pessoas` based on the provided `id`.
	 *
	 * @async
	 * @method
	 * @name findById
	 * @memberof UserService
	 * @param {number} id
	 * @returns {Promise<PostgrestResponseFailure | PostgrestResponseSuccess<any[]>>}
	 */
	async findById(id: number) {
		const user = await this.supabase
			.from(tableName)
			.select("*")
			.eq("id", id)
			.then((res) => res);
		return user;
	}

	/**
	 * The `async update(user: Pessoa) {` method in the `UserService` class is a function that updates a record in the database
	 * table named `pessoas`. It takes a parameter `user` of type `Pessoa` which represents the updated user data.
	 *
	 * @async
	 * @method
	 * @name update
	 * @memberof UserService
	 * @param {IPessoa} user
	 * @returns {Promise<PostgrestResponseFailure | PostgrestResponseSuccess<null>>}
	 */
	async update(user: IPessoa) {
		const updated = await this.supabase
			.from(tableName)
			.update(user)
			.eq("id", user.id)
			.then((res) => res);
		return updated;
	}

	/**
	 * The `async delete(id: number) {` method in the `UserService` class is a function that deletes a specific record from the
	 * database table named `pessoas` based on the provided `id`.
	 *
	 * @async
	 * @method
	 * @name delete
	 * @memberof UserService
	 * @param {number} id
	 * @returns {Promise<PostgrestResponseFailure | PostgrestResponseSuccess<null>>}
	 */
	async delete(id: number) {
		const updated = await this.supabase
			.from(tableName)
			.delete()
			.eq("id", id)
			.then((res) => res);
		return updated;
	}
}
