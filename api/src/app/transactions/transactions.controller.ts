/* eslint-disable prettier/prettier */

/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { Transacao } from 'src/core/models/Transaction';
import { TransactionsService } from './transactions.service';

@Controller('transacao')
export class TransactionsController {

    constructor(private readonly transactionService: TransactionsService){}

    
    @Post()
    create(@Body() body: Transacao){
        return this.transactionService.create(body)
    }

    @Get()
    findAll(){
        return this.transactionService.findAll()
    }

    @Get('/:id')
    findById(@Param('id') id: number){
        return this.transactionService.findById(id)
    }

    @Get('/user/:id')
    findByUserId(@Param('id') id: number){
        return this.transactionService.findByUserId(id)
    }

    @Get('/account/:id')
    findByAccountId(@Param('id') id: number){
        return this.transactionService.findByAccountId(id)
    }

    @Put('/:id')
    update(@Body() body: Transacao){
        return this.transactionService.update(body)
    }

    @Delete('/:id')
    delete(@Param('id') id: number){
        return this.transactionService.delete(id)
    }
}