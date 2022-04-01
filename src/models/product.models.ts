import { User } from './user.models';
import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { Category } from './category.models';

@Table
export class Product extends Model<Product> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    })
    id_user: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        }
    })
    id_category: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @Column({
        type: DataType.DOUBLE,
        allowNull: false
    })
    price: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    urlImg: string;
}