/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";

import { DataBase } from "src/core/database";

@Injectable()
export class BankService extends DataBase{
    constructor(){
        super()
    }

    async getAll(){
        const {data, error} = await this.supabase.from("banco").select("*")
        return {data, error}
    }
}