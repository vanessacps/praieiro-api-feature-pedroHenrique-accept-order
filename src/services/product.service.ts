import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Product } from '../models/product.models';

@Injectable()
export class ProductService {

    constructor(
        @InjectModel(Product)
        private productModel: typeof Product
    ) { }

    async getAll(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async getById(id: number): Promise<Product> {
        return this.productModel.findByPk(id);
    }

    async create(seller: Product) {
        this.productModel.create(seller);
    }

    async uptade(seller: Product): Promise<[number, Product[]]> {
        return this.productModel.update(seller, {
            where: { id: seller.id }
        });
    }

    async delete(id: number) {
        const currentSeller = await this.getById(id);
        currentSeller.destroy();
    }

}
