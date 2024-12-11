import { Module } from "@nestjs/common";
import { ApiService } from "./services/apiService.service";
import { DomainModule } from "src/domain/domain.module";
import { apiServiceProvider, apiServiceProviderName } from '../api/services/providers/apiService.provider'

@Module({
    imports: [DomainModule],
    providers: [apiServiceProvider],
    exports: [apiServiceProviderName.API_SERVICE]
})
export class ApiModule {}