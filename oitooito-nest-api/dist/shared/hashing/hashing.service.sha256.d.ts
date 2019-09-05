import { HashingServiceBase } from "./hashing.service.base";
export declare class HashingServiceSHA256 extends HashingServiceBase {
    hash(raw: string): string;
}
