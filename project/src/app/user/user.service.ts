import { Inject, Injectable } from "@nestjs/common";
import { UserDTO } from "@UserDTO";
import { IUserRepo } from "@IuserRepo";
import { User } from "@User";
import { UserDBRepoProviderName } from "@UserDBRepoProvider";

@Injectable()
export class UserService {
    constructor(
        @Inject(UserDBRepoProviderName.USER_DB_REPO) private readonly userDBRepo: IUserRepo
    ) {}
    
    async getAll(): Promise<User[]> {
        return await this.userDBRepo.getAll()
    }
    async getById(id: number): Promise<User> {
        const user = this.userDBRepo.getById(id)

        return user
    }

    async save(user: UserDTO): Promise<User> {
        const creted = await this.userDBRepo.save(user)

        return creted
    }
}