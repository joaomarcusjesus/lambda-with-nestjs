"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers_1 = require("@/use-cases/customers");
const mock_find_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-find-customer-repository");
describe('FindCustomerUseCases', () => {
    let useCases;
    let repository;
    beforeEach(() => {
        repository = new mock_find_customer_repository_1.MockFindCustomerRepository();
        useCases = new customers_1.FindCustomer(repository);
    });
    it('should find a customer by uuid', async () => {
        const input = {
            uuid: 'uuid',
        };
        const result = await useCases.execute(input);
        expect(result).toBeDefined();
        expect(result.uuid).toBe(input.uuid);
    });
});
//# sourceMappingURL=find-customer.spec.js.map