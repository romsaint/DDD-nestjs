import { UserService } from "@UserService";

const nameService = 'UserService'

export const UserProvider = {
    provide: nameService,
    useClass: UserService
}
export const UserProviderName = {USERS_SERVICE: nameService}