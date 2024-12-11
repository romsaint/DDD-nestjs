import { Inject, Injectable, ParseIntPipe, Query } from "@nestjs/common";
import { PostServiceProviderName } from "@PostServiceProvider";
import { UserServiceProviderName } from "@UserServiceProvider";
import { IPostService } from "@IPostService";
import { IUserService } from "@IUserService";
import { IApiService } from "../interfaces/apiService.interface";


@Injectable()
export class ApiService implements IApiService {
    constructor(
        @Inject(PostServiceProviderName.POST_SERVICE) private readonly postService: IPostService,
        @Inject(UserServiceProviderName.USER_SERVICE) private readonly userService: IUserService
    ) {}

    getPosts(id: number) {
        return this.postService.getPosts(id)
    }
}