"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCustomer = void 0;
class DeleteCustomer {
    constructor(repository) {
        this.repository = repository;
    }
    async execute(input) {
        await this.repository.delete({ uuid: input.uuid });
    }
}
exports.DeleteCustomer = DeleteCustomer;
//# sourceMappingURL=delete-customer.js.map