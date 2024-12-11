import { UserService } from '../user.service'

const nameService = 'UserService'

export const UserServiceProvider = {
    provide: nameService,
    useClass: UserService
}
export const UserServiceProviderName = {USER_SERVICE: nameService}