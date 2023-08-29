"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_mock_1 = require("../../../mocks/domain/models/customer-mock");
const customer_1 = require("@/domain/models/customer");
describe('Customer domain', () => {
    const customerData = (0, customer_mock_1.mockCustomer)();
    it('should create a Customer instance', () => {
        expect(new customer_1.Customer(customerData)).toBeDefined();
    });
    it('should correctly initialize Customer properties', () => {
        const instance = new customer_1.Customer(customerData);
        expect(instance.uuid).toBe(customerData.uuid);
        expect(instance.email).toBe(customerData.email);
        expect(instance.phone).toBe(customerData.phone);
        expect(instance.first_name).toBe(customerData.first_name);
        expect(instance.last_name).toBe(customerData.last_name);
    });
});
//# sourceMappingURL=customer.spec.js.map