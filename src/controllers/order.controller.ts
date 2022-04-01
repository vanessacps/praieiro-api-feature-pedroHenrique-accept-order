import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Order } from 'src/models/order.models';
import { Product } from 'src/models/product.models';
import { OrderService } from 'src/services/order.service';
import { ProductOrderService } from 'src/services/productOrder.service';



@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService, private productOrderService: ProductOrderService) { }

    @Post('create')
    async create(@Body() order: Order,@Body() products: Product[]) {
        this.orderService.create(order);
        this.productOrderService.create(order, products);
    }

    @Get('getAll')
    async getAll(): Promise<Order[]> {
        return this.orderService.getAll();
    }

    @Get('getById/:id')
    async getById(@Param() params): Promise<Order> {
        return this.orderService.getById(params.id);
    }

    @Put('uptade')
    async uptade(@Body() body: Order): Promise<[number, Order[]]> {
        return this.orderService.uptade(body);
    }

    @Delete('delete/:id')
    async delete(@Param() params) {
        return this.orderService.delete(params.id);
    }

    

}



