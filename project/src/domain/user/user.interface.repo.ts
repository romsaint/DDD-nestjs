import { UserDTO } from "@UserDTO"
import { User } from "@User"

export interface IUserRepo {
    getAll(): Promise<User[]>
    getById(id: number): Promise<User>
    save(user: UserDTO): Promise<User>
}