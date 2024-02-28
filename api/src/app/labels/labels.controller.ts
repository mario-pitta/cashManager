/* eslint-disable prettier/prettier */

import { Controller, Get, Post, Put, Delete } from '@nestjs/common';

@Controller('labels')
export class LabelsController {
    @Post()
    create(){}

    @Get()
    findAll(){}

    @Put('/:id')
    update(){}

    @Delete('/:id')
    delete(){}
}