import { Product } from './product.models';
import { Order } from './order.models';
import { Column, DataType, Model, Table, ForeignKey } from 'sequelize-typescript';

@Table
export class ProductOrder extends Model<ProductOrder>{
    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    productId: number

    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    orderId: number

}