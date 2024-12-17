import { HttpException, Injectable } from "@nestjs/common";
import { UserDTO } from "@UserDTO";
import { User } from "src/infrastructure/database/postgres/user/user.schema";
import { IUserService } from "./interfaces/user.service.interface";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";


@Injectable()
export class UserService implements IUserService {
    constructor(
        private readonly eventEmitter2: EventEmitter2
    ) { }

    @OnEvent('user.getAll')
    async getAll(): Promise<User[]> {
        try {
            return (await this.eventEmitter2.emitAsync('user.repo.getAll'))[0]
        } catch (e) {
            throw new HttpException(e.status || 500, e.message || 'Unexpected error :(')
        }
    }

    @OnEvent('user.getById')
    async getById(id: number): Promise<User> {
        try {
            return (await this.eventEmitter2.emitAsync('user.repo.getById', id))[0]
        } catch (e) {
            throw new HttpException(e.status || 500, e.message || 'Unexpected error :(')
        }
    }

    @OnEvent('user.save')
    async save(user: UserDTO): Promise<User> {
        try {
            return (await this.eventEmitter2.emitAsync('user.repo.save', user))[0]
        } catch (e) {
            throw new HttpException(e.status || 500, e.message || 'Unexpected error :(')
        }
    }
}