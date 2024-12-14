import { UserDBRepo } from "src/infrastructure/database/postgres/user/user.db.repo";

const nameService = 'UserDBRepo'

export const UserDBRepoProvider = {
    provide: nameService,
    useClass: UserDBRepo
}
export const UserDBRepoProviderName = {USER_DB_REPO: nameService}