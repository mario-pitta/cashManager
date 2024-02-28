/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { DataBase } from "src/core/database";
import { Transacao } from "src/core/models/Transaction";


const tableName =  'transacoes'
@Injectable()
export class TransactionsService extends DataBase {
    constructor(){ super() }

    /**
     * The `async create(transacao: Transacao){` method in the `TransactionsService` class is a method used to create a new
     * transaction record in the database.
     * 
     * @async
     * @method
     * @name create
     * @kind method
     * @memberof TransactionsService
     * @param {Transacao} transacao
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async create(transacao: Transacao){
        const { data, error, status} = await this.supabase.from(tableName).insert(transacao).select().then(res => res)
        return  { data, error, status}
    }
    
  
    /**
     * The `async findAll(){` method in the `TransactionsService` class is a method used to retrieve all transaction records
     * from the database. It performs a select operation on the `transacoes` table in the database, fetching all available
     * transaction data. The method then returns an object containing the retrieved data (if any), any potential errors, and
     * the status of the operation.
     * 
     * @async
     * @method
     * @name findAll
     * @memberof TransactionsService
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async findAll(){        
        const { data, error, status} = await this.supabase.from(tableName).select().then(res => res)
        return  { data, error, status}
    }
    /**
     * The `async findById(id: number){` method in the `TransactionsService` class is a method used to retrieve a specific
     * transaction record from the database based on the provided `id`.
     * 
     * @async
     * @method
     * @name findById
     * @kind method
     * @memberof TransactionsService
     * @param {number} id
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async findById(id: number){        
        const { data, error, status} = await this.supabase.from(tableName).select().eq('id', id).then(res => res)
        return  { data, error, status}
    }
    
     /**
     * The `async findByUserId(userId: number)` method in the `TransactionsService` class is a method used to retrieve
     * transaction data from the database based on a specific `userId`.
     * 
     * @async
     * @method
     * @name findByUserId
     * @kind method
     * @memberof TransactionsService
     * @param {number} userId
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
     async findByUserId(userId: number) {
        const { data, error, status} = await this.supabase.from(tableName).select('*').eq('pessoa_id', userId).then(res => res)
        return  { data, error, status}
  
    }



    /**
     * The `async findByAccountId(id: number)` method in the `TransactionsService` class is a method used to retrieve
     * transaction data from the database based on a specific `conta_id` (account ID). It performs a select operation on the
     * `transacoes` table in the database, filtering the results to only include transactions that have a matching `conta_id`
     * equal to the provided `id`. The method then returns an object containing the retrieved data (if any), any potential
     * errors, and the status of the operation.
     * 
     * @async
     * @method
     * @name findByAccountId
     * @memberof TransactionsService
     * @param {number} id
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async findByAccountId(id: number) {
        const { data, error, status} = await this.supabase.from(tableName).select('*').eq('conta_id', id).then(res => res)
        return  { data, error, status}
    }

    /**
     * The `async update(transacao: Transacao){` method in the `TransactionsService` class is a method used to update an
     * existing transaction record in the database. It takes a `Transacao` object as a parameter, which represents the updated
     * transaction data. The method then performs an update operation on the `transacoes` table in the database, setting the
     * new values provided in the `transacao` object for the transaction with the matching `id` field.
     * 
     * @async
     * @method
     * @name update
     * @kind method
     * @memberof TransactionsService
     * @param {Transacao} transacao
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async update(transacao: Transacao){
        const { data, error, status} = await this.supabase.from(tableName).update(transacao).eq('id', transacao.id).select().then(res => res)
        return  { data, error, status}
    }
    
    /**
     * The `async delete(id: number){` method in the `TransactionsService` class is a method used to delete a specific
     * transaction record from the database based on the provided `id`. It performs a delete operation on the `transacoes`
     * table in the database, targeting the transaction with the matching `id` field. The method then returns an object
     * containing the result of the delete operation, including the deleted data (if any), any potential errors, and the status
     * of the operation.
     * 
     * @async
     * @method
     * @name delete
     * @kind method
     * @memberof TransactionsService
     * @param {number} id
     * @returns {Promise<{ data: any[] | null; error: PostgrestError | null; status: number; }>}
     */
    async delete(id: number){
        const { data, error, status} = await this.supabase.from(tableName).delete().eq('id', id).select().then(res => res)
        return  { data, error, status}
    }



}
