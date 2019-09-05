import { Module } from '@nestjs/common';
import { HashingServiceBase } from './hashing.service.base';
import { HashingServiceSHA256 } from './hashing.service.sha256';

@Module({
    providers: [
        {
            provide: HashingServiceBase,
            useClass: HashingServiceSHA256
        }
    ],
    exports: [
        HashingServiceBase
    ]
})
export class HashingModule {}
