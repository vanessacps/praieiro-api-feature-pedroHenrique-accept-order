import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/models/product.models';
//import { ProductOrder } from 'src/models/productOrder.model.ts';

import { Order } from '../models/order.models';

@Injectable()
export class OrderService {

    constructor(
        @InjectModel(Order)
        private orderModel: typeof Order
    ) { }

    async getAll(): Promise<Order[]> {
        return this.orderModel.findAll();
    }

    async getById(id: number): Promise<Order> {
        return this.orderModel.findByPk(id);
    }

    async create(seller: Order) {
        this.orderModel.create(seller);
    }

    async uptade(seller: Order): Promise<[number, Order[]]> {
        return this.orderModel.update(seller, {
            where: { id: seller.id }
        });
    }

    async delete(id: number) {
        const currentSeller = await this.getById(id);
        currentSeller.destroy();
    }

}