import { HashingServiceBase } from "./hashing.service.base";
import * as shajs from 'sha.js';

export class HashingServiceSHA256 extends HashingServiceBase{
    public hash(raw: string): string {
        const sha256 = shajs('sha256');
        let result: string = raw;
        for(let i=0;i<10000;i++) {
            result = sha256.update(result).digest('hex');
        }
        return result;
    }

}