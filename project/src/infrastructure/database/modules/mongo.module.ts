import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostMongoSchema, PostSchema } from '../mongodb/post/post.schema';
import { MongoPostRepository } from '../mongodb/post/post.repo';

@Module({
    imports: [
        MongooseModule.forRoot('mongodb://localhost:27017/'),
        MongooseModule.forFeature([{ name: 'Post', schema: PostMongoSchema }]),
    ],
    providers: [MongoPostRepository]
})
export class MongoDatabaseModule {}