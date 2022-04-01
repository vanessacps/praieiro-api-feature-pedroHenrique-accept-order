import { Module } from '@nestjs/common';

const envConfig = require(`../config/configuration.${process.env.NODE_ENV}`).default;

@Module(envConfig)

export class AppModule { }
