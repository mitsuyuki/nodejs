export declare class AppConfigService {
    private readonly _envConfig;
    constructor(env: string);
    get(key: string): string;
}
