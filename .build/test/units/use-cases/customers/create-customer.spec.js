"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers_1 = require("@/use-cases/customers");
const mock_create_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-create-customer-repository");
const create_customer_1 = require("../../../mocks/http/customers/create-customer");
describe('CreateCustomerUseCases', () => {
    let useCases;
    let repository;
    beforeEach(() => {
        repository = new mock_create_customer_repository_1.MockCreateCustomerRepository();
        useCases = new customers_1.CreateCustomer(repository);
    });
    it('should create a customer', async () => {
        const input = (0, create_customer_1.mockHttpCustomer)();
        const createSpy = jest.spyOn(repository, 'create');
        await useCases.execute(input);
        expect(createSpy).toHaveBeenCalledTimes(1);
        expect(createSpy).toHaveBeenCalledWith(input);
    });
});
//# sourceMappingURL=create-customer.spec.js.map