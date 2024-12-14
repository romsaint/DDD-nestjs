import { Module } from "@nestjs/common";
import { UserService } from "@UserService";
import { PostService } from "./post/post.service";
import { PostgreDataBaseModule } from "src/infrastructure/database/modules/typeorm.module";
import { MongoDatabaseModule } from "src/infrastructure/database/modules/mongo.module";

@Module({
    imports: [PostgreDataBaseModule, MongoDatabaseModule],
    providers: [UserService, PostService]
})
export class DomainModule { }