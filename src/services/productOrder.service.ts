import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from 'src/models/product.models';
import { Order } from 'src/models/order.models';
import { ProductOrder } from 'src/models/productOrder.model';

@Injectable()
export class ProductOrderService {
    constructor(
        @InjectModel(ProductOrder)
        private productOrderModel: typeof ProductOrder
    ) { }
    async create(order: Order,products: Product[]) {
        for(let i =0; i<products.length; i++ ){
            let product: Product;
            product = products[i];
            this.productOrderModel.create(order.id, product.id);
        }
        
    }
}