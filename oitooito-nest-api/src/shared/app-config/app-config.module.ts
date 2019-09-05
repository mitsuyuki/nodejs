import { Module } from '@nestjs/common';
import { AppConfigService } from './app-config.service';

@Module({
    providers: [
        {
            provide: AppConfigService,
            useValue: new AppConfigService(`${process.env.API_ENV}`)
        }
    ],
    exports: [
        AppConfigService
    ]
})
export class AppConfigModule {}
