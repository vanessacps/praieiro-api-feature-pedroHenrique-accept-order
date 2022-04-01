import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { User } from '../models/user.models';
import { Product } from '../models/product.models';
import { Category } from '../models/category.models';

import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { CategoryService } from '../services/category.service';

import { UserController } from '../controllers/user.controller';
import { ProductController } from '../controllers/product.controller';
import { CategoryController } from '../controllers/category.controller';

import { Order } from 'src/models/order.models';
import { ProductOrder } from 'src/models/productOrder.model';
import { OrderController } from 'src/controllers/order.controller';
import { OrderService } from 'src/services/order.service';
import { ProductOrderService } from 'src/services/productOrder.service';


@Module({
    imports: [
        SellerModule,
        SequelizeModule,
        SequelizeModule.forFeature([
            User,
            Category,
            Product,
            Order,
            ProductOrder
        ])
    ],
    controllers: [
        UserController,
        ProductController,
        CategoryController,
        OrderController
        
    ],
    providers: [
        UserService,
        CategoryService,
        ProductService,
        OrderService,
        ProductOrderService
    ],
    exports: [
        UserService,
        CategoryService,
        ProductService,
        OrderService,
        ProductOrderService
    ]
})
export class SellerModule { }
