import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { SellerModule } from '../modules/user.module';

const url_match = process.env.DATABASE_URL.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);
const url       = url_match[3];
const username  = url_match[1];
const password  = url_match[2];
const port      = url_match[4];
const database  = url_match[5];

export default () => ({
    imports: [
        SellerModule,
        ConfigModule.forRoot(),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: url,
            port: parseInt(port),
            username: username,
            password: password,
            database: database,
            autoLoadModels: true,
            synchronize: true
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: []
});
