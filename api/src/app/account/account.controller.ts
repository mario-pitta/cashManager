/* eslint-disable prettier/prettier *//*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { AccountService } from './account.service';
import { Conta } from 'src/core/models/Conta';

@Controller('account')
export class AccountController {

    constructor(private readonly accountService: AccountService){
        return this
    }

    @Post()
    create(@Body() body: Conta){
        return this.accountService.create(body);
    }

    @Get()
    findAll(){
        return this.accountService.findAll()
    }
    
    @Get('/:id')
    findById(@Param('id') id: number){
        return this.accountService.findById(id)
    }

    @Get('search')
    findByFilters(@Param() params: Partial<Conta> | Conta){
        return this.accountService.getByFilter(params)
    }
    @Get('user/:id')
    findByUserId(@Param('id') id: number){
        return this.accountService.findByUserId(id)
    }

    @Get('amount/user/:id')
    getAmountByUserId(@Param('id') id: number){
        console.log("getting ammout from user, ", id)
        return this.accountService.getAmountByUserId(id)
    }

    @Put()
    update(@Body() body: Conta){
        return this.accountService.update(body);
    }

    @Delete('/:id')
    delete(@Param('id') id: number){
        return this.accountService.delete(id)
    }
}