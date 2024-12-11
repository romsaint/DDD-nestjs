import { ApiService } from "../apiService.service"

const nameService = 'ApiService'

export const apiServiceProvider = {
    provide: nameService,
    useClass: ApiService
}
export const apiServiceProviderName = {API_SERVICE: nameService}