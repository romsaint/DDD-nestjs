import { Module } from '@nestjs/common';
import { PostgreDataBaseModule } from './infrastructure/database/modules/typeorm.module';
import { MongoDatabaseModule } from './infrastructure/database/modules/mongo.module';
import { DomainModule } from './domain/domain.module';
import { UserController } from './presentation/user/user.controller';
import { ApiModule } from './api/api.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PostController } from './presentation/post/post.controller';

@Module({
  imports: [
    PostgreDataBaseModule,
    MongoDatabaseModule,
    DomainModule,
    EventEmitterModule.forRoot({})
  ],
  controllers: [UserController, PostController],
  providers: [],
})

export class AppModule { }