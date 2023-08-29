"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomer = void 0;
class CreateCustomer {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(input) {
        await this.repository.create(input);
    }
}
exports.CreateCustomer = CreateCustomer;
//# sourceMappingURL=create-customer.js.map