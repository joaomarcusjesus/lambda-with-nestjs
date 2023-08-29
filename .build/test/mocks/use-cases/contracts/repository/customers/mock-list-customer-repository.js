"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockListCustomerRepository = void 0;
const customer_mock_1 = require("../../../../domain/models/customer-mock");
class MockListCustomerRepository {
    async list(_input) {
        return [(0, customer_mock_1.mockCustomer)()];
    }
}
exports.MockListCustomerRepository = MockListCustomerRepository;
//# sourceMappingURL=mock-list-customer-repository.js.map