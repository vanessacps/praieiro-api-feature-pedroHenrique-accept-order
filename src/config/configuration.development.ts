import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { SellerModule } from '../modules/user.module';

export default () => ({
    imports: [
        SellerModule,
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
            dialect: 'mysql',
            host: process.env.DATABASE_URL,
            port: 3306,
            username: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE,
            autoLoadModels: true,
            synchronize: true
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: []
});
