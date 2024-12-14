import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/infrastructure/database/postgres/user/user.schema";
import { MoreThan, Repository } from "typeorm";
import { IUserRepo } from '@IUserRepo';
import { UserDTO } from "@UserDTO"
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class UserDBRepo implements IUserRepo {
    constructor(
        @InjectRepository(User) private readonly ormRepository: Repository<User>
    ) {}
    
    @OnEvent('user.repo.save')
    async save(user: UserDTO): Promise<User> {
        return await this.ormRepository.save(user)
    }

    @OnEvent('user.repo.getById')
    async getById(id: number): Promise<User> {
  
        return await this.ormRepository.findOne({where: {id}})
    }
    
    @OnEvent('user.repo.getAll')
    async getAll(): Promise<User[]> {
        return this.ormRepository.find()
    }
}