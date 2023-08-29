"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockFindCustomerRepository = void 0;
const customer_mock_1 = require("../../../../domain/models/customer-mock");
class MockFindCustomerRepository {
    async find(_input) {
        return (0, customer_mock_1.mockCustomer)();
    }
}
exports.MockFindCustomerRepository = MockFindCustomerRepository;
//# sourceMappingURL=mock-find-customer-repository.js.map