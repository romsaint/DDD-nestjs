import { Module } from '@nestjs/common';
import { PostgreDataBaseModule } from './infrastructure/database/modules/typeorm.module';
import { MongoDatabaseModule } from './infrastructure/database/modules/mongo.module';
import { DomainModule } from './domain/domain.module';
import { UserController } from './presentation/user/user.controller';
import { ApiService } from './api/services/apiService.service';
import { ApiModule } from './api/api.module';

@Module({
  imports: [
    PostgreDataBaseModule,
    MongoDatabaseModule,
    DomainModule,
    ApiModule
  ],
  controllers: [UserController],
  providers: [],
})

export class AppModule { }