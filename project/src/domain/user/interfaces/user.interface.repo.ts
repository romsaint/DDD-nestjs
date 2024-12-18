import { UserDTO } from "@UserDTO"
import { User } from "src/infrastructure/database/postgres/user/user.schema"

export interface IUserRepo {
    getAll(): Promise<User[]>
    getById(id: number): Promise<User>
    save(user: UserDTO): Promise<User>
}