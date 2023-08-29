"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomer = void 0;
class UpdateCustomer {
    constructor(updateCustomerRepository, findCustomerRepository) {
        this.updateCustomerRepository = updateCustomerRepository;
        this.findCustomerRepository = findCustomerRepository;
    }
    async execute(input) {
        const customerOld = await this.findCustomerRepository.find({ uuid: input.uuid });
        const customerNew = Object.assign(Object.assign({}, customerOld), input);
        await this.updateCustomerRepository.update(customerNew);
    }
}
exports.UpdateCustomer = UpdateCustomer;
//# sourceMappingURL=update-customer.js.map