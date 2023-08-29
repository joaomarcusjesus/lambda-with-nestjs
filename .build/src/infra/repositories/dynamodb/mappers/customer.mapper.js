"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerMapper = void 0;
const customer_1 = require("../../../../domain/models/customer");
class CustomerMapper {
    static ToDomain(entity) {
        return new customer_1.Customer({
            uuid: entity.id,
            first_name: entity.first_name,
            last_name: entity.last_name,
            email: entity.email,
            phone: entity.phone,
        });
    }
}
exports.CustomerMapper = CustomerMapper;
//# sourceMappingURL=customer.mapper.js.map