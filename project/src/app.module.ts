import { Module } from '@nestjs/common';
import { MyDbModule } from './infrastructure/database/typeorm.module';
import { UserModule } from './app/user/user.module';
import { ControllerModule } from './presentation/controller.module';

@Module({
  imports: [
    MyDbModule,
    UserModule,
    ControllerModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule { }