import { Module } from "@nestjs/common";
import { UserController } from "./user/user.controller";
import { UserModule } from "src/app/user/user.module";

@Module({
    imports: [UserModule],
    controllers: [UserController]
})
export class ControllerModule {}