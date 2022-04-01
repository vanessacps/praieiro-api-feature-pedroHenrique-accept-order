import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Category extends Model<Category>{
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
}