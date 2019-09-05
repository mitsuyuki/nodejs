import { Injectable } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class AppConfigService {

    private readonly _envConfig: { [key: string ]: string };

    constructor(env: string) {
        this._envConfig = dotenv.parse(fs.readFileSync(`${env}.env`));
    }

    public get(key: string): string {
        return this._envConfig[key];
    }
}
