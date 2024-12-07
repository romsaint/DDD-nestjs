import { Module } from "@nestjs/common";
import { MyDbModule } from "@TypeORMModule";
import { UserProvider, UserProviderName } from "@UserServiceProvider";


@Module({
    imports: [MyDbModule],
    providers: [UserProvider],
    exports: [UserProviderName.USERS_SERVICE]
})

export class UserModule { }