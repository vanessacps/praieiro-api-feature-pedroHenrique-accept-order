import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { User } from '../models/user.models';
import { UserService } from '../services/user.service';

@Controller('seller')
export class UserController {

    constructor(private userService: UserService) { }

    @Get('getAll')
    async getAll(): Promise<User[]> {
        return this.userService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<User> {
        return this.userService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: User) {
        this.userService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: User): Promise<[number, User[]]> {
        return this.userService.uptade(body);
    }

    @Put('setStatus')
    async setStatus(@Body() body: User): Promise<[number, User[]]> {
        return this.userService.setStatus(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.userService.delete(params.id);
    }
}
