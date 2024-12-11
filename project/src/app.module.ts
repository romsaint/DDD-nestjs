import { Module } from '@nestjs/common';
import { PostgreDataBaseModule } from './infrastructure/database/modules/typeorm.module';
import { ControllerModule } from './presentation/controller.module';
import { MongoDatabaseModule } from './infrastructure/database/modules/mongo.module';
import { DomainModule } from './domain/domain.module';

@Module({
  imports: [
    PostgreDataBaseModule,
    MongoDatabaseModule,
    ControllerModule,
    DomainModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }