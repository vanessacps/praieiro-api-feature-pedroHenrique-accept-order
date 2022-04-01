export default () => ({
    database: {
        dialect: 'mysql',
        host: process.env.DATABASE_URL,
        port: 3306,
        username: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
        autoLoadModels: true,
        synchronize: true
    }
});