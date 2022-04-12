import { User } from './user.models';
import { Column, DataType, Model, Table, HasMany, AllowNull} from 'sequelize-typescript';
import { Category } from './category.models';

@Table
export class Order extends Model<Order> {

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    oderId: Order;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId : User;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    sellerId: User;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date: Date;

   // @Column({
     //   type: DataType.ENUM,
      //  allowNull: false
   // })
    //orderStatus: Enumerator;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    avaliacao: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    comentario: string;

}   


