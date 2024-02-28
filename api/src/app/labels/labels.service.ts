/* eslint-disable prettier/prettier */

import { Injectable } from "@nestjs/common";
import { DataBase } from "src/core/database";
const tableName = 'categorias'
@Injectable()
export class LabelsService extends DataBase {
    constructor(){
        super()
    }

    
     async create(){
        const {data, error, status} = await this.supabase.from(tableName).select().then(res => res);
        return {data, error,status}
    }

    
     async findAll(){
        const {data, error, status} = await this.supabase.from(tableName).select().then(res => res);
        return {data, error,status}
    }

    
     async update(){
        const {data, error, status} = await this.supabase.from(tableName).select().then(res => res);
        return {data, error,status}
    }

    
     async delete(){
        const {data, error, status} = await this.supabase.from(tableName).select().then(res => res);
        return {data, error,status}
    }



}
