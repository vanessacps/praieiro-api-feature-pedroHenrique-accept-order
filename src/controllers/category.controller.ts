import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Category } from 'src/models/category.models';
import { CategoryService } from '../services/category.service';

@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }

    @Get('getAll')
    async getAll(): Promise<Category[]> {
        return this.categoryService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Category> {
        return this.categoryService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: Category) {
        this.categoryService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: Category): Promise<[number, Category[]]> {
        return this.categoryService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.categoryService.delete(params.id);
    }

}
