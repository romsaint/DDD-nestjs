import { PostService } from "../post.service"

const nameService = 'PostService'

export const PostServiceProvider = {
    provide: nameService,
    useClass: PostService
}
export const PostServiceProviderName = {POST_SERVICE: nameService}