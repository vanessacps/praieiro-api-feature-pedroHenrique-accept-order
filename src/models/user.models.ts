import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model<User> {

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_seller: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_online: boolean;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    fantasyName: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    phone: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;
}