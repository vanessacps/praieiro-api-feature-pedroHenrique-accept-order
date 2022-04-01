import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

import { User } from '../models/user.models';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private userModel: typeof User
    ) { }

    async getAll(): Promise<User[]> {
        return this.userModel.findAll();
    }

    async getById(id: number): Promise<User> {
        return this.userModel.findByPk(id);
    }

    async create(User: User) {
        this.userModel.create(User);
    }

    async uptade(User: User): Promise<[number, User[]]> {
        return this.userModel.update(User, {
            where: { id: User.id }
        });
    }

    async setStatus(User: User): Promise<[number, User[]]> {
        return this.userModel.update({is_online: User.is_online}, {
            where: { id: User.id }
        });
    }

    async delete(id: number) {
        const currentSeller = await this.getById(id);
        currentSeller.destroy();
    }
}
