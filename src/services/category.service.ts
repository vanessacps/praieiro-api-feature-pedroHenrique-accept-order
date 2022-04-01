import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { Category } from '../models/category.models';

@Injectable()
export class CategoryService {

    constructor(
        @InjectModel(Category)
        private categoryModel: typeof Category
    ) { }

    async getAll(): Promise<Category[]> {
        return this.categoryModel.findAll();
    }

    async getById(id: number): Promise<Category> {
        return this.categoryModel.findByPk(id);
    }

    async create(seller: Category) {
        this.categoryModel.create(seller);
    }

    async uptade(seller: Category): Promise<[number, Category[]]> {
        return this.categoryModel.update(seller, {
            where: { id: seller.id }
        });
    }

    async delete(id: number) {
        const currentSeller = await this.getById(id);
        currentSeller.destroy();
    }

}
