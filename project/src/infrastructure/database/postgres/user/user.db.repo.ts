import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/infrastructure/database/postgres/user/user.schema";
import { MoreThan, Repository } from "typeorm";
import { IUserRepo } from '@IUserRepo';
import { UserDTO } from "@UserDTO"

@Injectable()
export class UserDBRepo implements IUserRepo {
    constructor(
        @InjectRepository(User) private readonly ormRepository: Repository<User>
    ) {}
    
    async save(user: UserDTO): Promise<User> {
        return await this.ormRepository.save(user)
    }
    async saveTest(): Promise<User[]> {
        
        return await this.ormRepository.find({where: {id: MoreThan(0)}})
    }
    async getById(id: number): Promise<User> {
  
        return await this.ormRepository.findOne({where: {id}})
    }
    async getAll(): Promise<User[]> {
        return this.ormRepository.find()
    }
}