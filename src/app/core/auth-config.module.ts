import { Inject, Injectable, NgModule } from '@angular/core';
import { OpenIdConfiguration, StsConfigStaticLoader, AuthModule, StsConfigLoader } from 'angular-auth-oidc-client';
import { AppConfig } from './app-config';
import { APP_CONFIG } from './app-config.token';

@Injectable({ providedIn: 'root' })
export class AuthConfigService {

    constructor(@Inject(APP_CONFIG) private config: AppConfig) {}

    getConfig(): OpenIdConfiguration {
        return this.config.authorization;
    }
}

const authFactory = (configService: AuthConfigService) => {
    console.log(configService.getConfig())
    const config = configService.getConfig();
    return new StsConfigStaticLoader(config);
};

@NgModule({
    imports: [
        AuthModule.forRoot({
            loader: {
                provide: StsConfigLoader,
                useFactory: authFactory,
                deps: [AuthConfigService],
            },
        }),
    ],
    exports: [AuthModule],
})
export class AuthConfigModule {}
