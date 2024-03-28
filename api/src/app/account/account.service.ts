/* eslint-disable prettier/prettier */

/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@nestjs/common";
import { DataBase } from "../../core/database";
import { Conta } from "../../core/models/Conta";
const tableName = "contas";

@Injectable()
export class AccountService extends DataBase {
	constructor() {
		super();
	}

	/**
	 * The `async create(conta: Conta) {` method in the `AccountService` class is responsible for inserting a new account
	 * record into the database. It takes a `Conta` object named `conta` as a parameter, which represents the account details
	 * to be inserted.
	 *
	 * @async
	 * @method
	 * @name create
	 * @kind method
	 * @memberof AccountService
	 * @param {Conta} conta
	 * @returns {Promise<{ data: null; error: PostgrestError | null; status: number; }>}
	 */
	async create(conta: Conta) {
		const { data, error, status } = await this.supabase
			.from(tableName)
			.insert(conta)
			.then((res) => res);
		return { data, error, status };
	}
	/**
	 * The `async findAll() {` method in the `AccountService` class is querying the database table named "contas" to retrieve
	 * all account records. It uses the `supabase` client to perform a select operation on the "contas" table, selecting all
	 * columns (`*`). Once the query is executed, it returns an object containing the retrieved data (array of account
	 * records), any potential errors that occurred during the query, and the status of the operation.
	 *
	 * @async
	 * @method
	 * @name findAll
	 * @kind method
	 * @memberof AccountService
	 * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
	 */
	async findAll() {
		const { data, error, status } = await this.supabase
			.from(tableName)
			.select(
				`*, 
					tipo_conta(id, descricao), 
					banco(id, descricao, logo_url)
				`
			)
			.then((res) => res);
		return { data, error, status };
	}
	/**
	 * The `async findById(id: number)` method in the `AccountService` class is querying the database table named "contas" to
	 * find and retrieve a specific account record that matches the provided `id`. It uses the `supabase` client to perform a
	 * select operation on the "contas" table where the "id" column is equal to the provided `id`. The method then returns an
	 * object containing the retrieved data, any potential errors that occurred during the query, and the status of the
	 * operation.
	 *
	 * @async
	 * @method
	 * @name findById
	 * @kind method
	 * @memberof AccountService
	 * @param {number} id
	 * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
	 */
	async findById(id: number) {
		const { data, error, status } = await this.supabase
			.from(tableName)
			.select(
				`*, 
					tipo_conta(id, descricao)
				`
			)
			.eq("id", id)
			.then((res) => res);
		return { data, error, status };
	}

	/**
	 * The `async findByUserId(userId: number)` method in the `AccountService` class is querying the database table named
	 * "contas" to find and retrieve account records that match the provided `userId`. It uses the `supabase` client to perform
	 * a select operation on the "contas" table where the "pessoa_id" column is equal to the provided `userId`. The method then
	 * returns an object containing the retrieved data, any potential errors that occurred during the query, and the status of
	 * the operation.
	 *
	 * @async
	 * @method
	 * @name findByUserId
	 * @kind method
	 * @memberof AccountService
	 * @param {number} userId
	 * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
	 */
	async findByUserId(userId: number) {


		console.log("async findByUserId")
		const { data, error, status } = await this.supabase
			.from(tableName)
			.select(
				`*, 
				tipo_conta(
					id, 
					descricao
				),
				banco(
					id, 
					descricao,
					logo_url
				)

				`
			)
			.eq("pessoa_id", userId)
			.then((res) => res);

		return { data, error, status };
	}

	/**
	 * The `async getByFilter(filter: Partial<Conta> | Conta)` method in the `AccountService` class is responsible for querying
	 * the database table named "contas" based on the provided filter criteria.
	 *
	 * @async
	 * @method
	 * @name getByFilter
	 * @kind method
	 * @memberof AccountService
	 * @param {Partial<Conta> | Conta} filter
	 * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
	 */
	async getByFilter(filter: Partial<Conta> | Conta) {
		console.log(filter);
		const { data, error, status } = await this.supabase
			.from(tableName)
			.select(
				`*, 
			tipo_conta(id, descricao)
		`,
			)
			.match({ ...filter })
			.then((res) => {
				console.log(res.error);
				return res;
			});
		return { data, error, status };
	}

	/**
	 * The `async getAmountByUserId(id: number)` method in the `AccountService` class is a method that retrieves the total
	 * amount of all account balances associated with a specific user ID.
	 *
	 * @async
	 * @method
	 * @name getAmountByUserId
	 * @kind method
	 * @memberof AccountService
	 * The `async update(conta: Conta) {` method in the `AccountService` class is responsible for updating an existing account
	 * record in the database. It takes a `Conta` object as a parameter, which represents the account details to be updated.
	 * @returns {Promise<number | undefined>}
	 */
	async getAmountByUserId(id: number) {
		const { data, error } = await this.findByUserId(id).then(r => r);

		if (error) {
			throw new Error("Error on get ammount from user: \n" + error.code + " " + error.message);
		}


		let saldo: number = 0;
		if (data) {
			for (const conta of data) {
				saldo += conta.saldo;
			}
		}

		console.log("terminou de contar o saldo")
		return { data: saldo, error }
	}

	/**
	 * The `async update(conta: Conta) {` method in the `AccountService` class is responsible for updating an existing account
	 * record in the database. It takes a `Conta` object as a parameter, which represents the account details to be updated.
	 * The method sends an update query to the database for the specified account ID (`conta.id`) with the new account details
	 * provided in the `conta` parameter. Once the update operation is completed, it returns an object containing the updated
	 * data, any potential errors that occurred during the update process, and the status of the update operation.
	 *
	 * @async
	 * @method
	 * @name update
	 * @kind method
	 * @memberof AccountService
	 * @param {Conta} conta
	 * @returns {Promise<{ data: null; error: PostgrestError | null; status: number; }>}
	 */
	async update(conta: Conta) {
		const { data, error, status } = await this.supabase
			.from(tableName)
			.update(conta)
			.eq("id", conta.id)
			.then((res) => res);
		return { data, error, status };
	}

	/**
	 * Description
	 *
	 * @async
	 * @method
	 * @name delete
	 * @kind method
	 * @memberof AccountService
	 * @param {number} id
	 * @returns {Promise<{ data: null; error: PostgrestError | null; status: number; }>}
	 */
	async delete(id: number) {
		const { data, error, status } = await this.supabase
			.from(tableName)
			.delete()
			.eq("id", id)
			.then((res) => res);
		return { data, error, status };
	}
}
