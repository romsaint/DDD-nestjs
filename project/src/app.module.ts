import { Module } from '@nestjs/common';
import { UserController } from './presentation/user/user.controller';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PostController } from './presentation/post/post.controller';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    EventEmitterModule.forRoot({}),
    DomainModule,
  ],
  controllers: [UserController, PostController],
  providers: [],
})

export class AppModule { }