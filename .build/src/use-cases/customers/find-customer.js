"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomer = void 0;
class FindCustomer {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(input) {
        return await this.repository.find({ uuid: input.uuid });
    }
}
exports.FindCustomer = FindCustomer;
//# sourceMappingURL=find-customer.js.map