"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashing_service_base_1 = require("./hashing.service.base");
const shajs = require("sha.js");
class HashingServiceSHA256 extends hashing_service_base_1.HashingServiceBase {
    hash(raw) {
        const sha256 = shajs('sha256');
        let result = raw;
        for (let i = 0; i < 10000; i++) {
            result = sha256.update(result).digest('hex');
        }
        return result;
    }
}
exports.HashingServiceSHA256 = HashingServiceSHA256;
//# sourceMappingURL=hashing.service.sha256.js.map