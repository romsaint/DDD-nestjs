import { Module } from "@nestjs/common";
import { PostServiceProvider, PostServiceProviderName } from '@PostServiceProvider';
import { UserDBRepoProvider, UserDBRepoProviderName } from "@UserDBRepoProvider";
import { UserServiceProvider, UserServiceProviderName } from "@UserServiceProvider";
import { PostgreDataBaseModule } from "src/infrastructure/database/modules/typeorm.module";
import { MongoDatabaseModule } from "src/infrastructure/database/modules/mongo.module";
import { PostMongoDBRepoProvider, PostMongoDBRepoProviderName } from "src/infrastructure/providers/postMongoRepo.provider";

@Module({
    imports: [MongoDatabaseModule, PostgreDataBaseModule],
    providers: [PostServiceProvider, UserServiceProvider, PostMongoDBRepoProvider, UserDBRepoProvider],
    exports: [PostServiceProviderName.POST_SERVICE, UserServiceProviderName.USER_SERVICE],
})
export class DomainModule { }