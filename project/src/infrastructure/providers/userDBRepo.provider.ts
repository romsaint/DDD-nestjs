import { UserDBRepo } from "@UserDBRepo";

const nameService = 'UserDBRepo'

export const UserDBRepoProvider = {
    provide: nameService,
    useClass: UserDBRepo
}
export const UserDBRepoProviderName = {USER_DB_REPO: nameService}