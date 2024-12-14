import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/infrastructure/database/postgres/user/user.schema";
import { UserDBRepoProvider, UserDBRepoProviderName } from "src/infrastructure/database/providers/userDBRepo.provider";

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (config: ConfigService) => ({
                port: 5432,
                type: 'postgres',
                username: config.get('POSTGRE_NAME'),
                password: config.get('POSTGRE_PASSWORD'),
                host: process.env.ENVIRONMENT == 'dev' ? 'localhost' : process.env.POSTGRE_HOST,
                database: config.get('POSTGRE_DBNAME'),
                entities: [User],
                synchronize: config.get<string>('ENVIRONMENT') === 'dev' ? true : false,
                logger: 'file',
                logging: true,
            }),
            inject: [ConfigService]
        }),
        TypeOrmModule.forFeature([User])
    ],
    providers: [UserDBRepoProvider]
})

export class PostgreDataBaseModule { }