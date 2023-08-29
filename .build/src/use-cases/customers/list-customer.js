"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCustomer = void 0;
class ListCustomer {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(input) {
        return await this.repository.list({ search: input.search });
    }
}
exports.ListCustomer = ListCustomer;
//# sourceMappingURL=list-customer.js.map