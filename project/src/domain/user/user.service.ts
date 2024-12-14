import { Inject, Injectable } from "@nestjs/common";
import { UserDTO } from "@UserDTO";
import { IUserRepo } from "@IUserRepo";
import { User } from "src/infrastructure/database/postgres/user/user.schema";
import { UserDBRepoProviderName } from "src/infrastructure/database/providers/userDBRepo.provider";
import { IUserService } from "./interfaces/user.service.interface";
import { EventEmitter2, OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class UserService implements IUserService {
    constructor(
        private readonly eventEmitter2: EventEmitter2
    ) {}
    
    @OnEvent('user.getAll')
    async getAll(): Promise<User[]> {
        return (await this.eventEmitter2.emitAsync('user.repo.getAll'))[0]
    }

    @OnEvent('user.getById')
    async getById(id: number): Promise<User> {
        const user = (await this.eventEmitter2.emitAsync('user.repo.getById', id))[0]
        
        return user
    }

    @OnEvent('user.save')
    async save(user: UserDTO): Promise<User> {
        const creted = (await this.eventEmitter2.emitAsync('user.repo.save', user))[0]
        
        return creted
    }
}