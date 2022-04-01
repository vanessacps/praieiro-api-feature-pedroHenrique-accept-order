import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Product } from '../models/product.models';
import { ProductService } from '../services/product.service';

@Controller('product')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Get('getAll')
    async getAll(): Promise<Product[]> {
        return this.productService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Product> {
        return this.productService.getById(params.id);
    }

    @Post('create')
    async create(@Body() body: Product) {
        this.productService.create(body);
    }

    @Put('uptade')
    async uptade(@Body() body: Product): Promise<[number, Product[]]> {
        return this.productService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.productService.delete(params.id);
    }
}
