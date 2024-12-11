import { MongoPostRepository } from "../database/mongodb/post/post.repo"

const nameService = 'MongoPostRepository'

export const PostMongoDBRepoProvider = {
    provide: nameService,
    useClass: MongoPostRepository
}
export const PostMongoDBRepoProviderName = {POST_MONGO_REPOSITORY: nameService}