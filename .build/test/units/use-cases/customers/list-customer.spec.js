"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_customer_1 = require("@/use-cases/customers/list-customer");
const customer_mock_1 = require("../../../mocks/domain/models/customer-mock");
const mock_list_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-list-customer-repository");
describe('ListCustomerUseCases', () => {
    let useCases;
    let repository;
    beforeEach(() => {
        repository = new mock_list_customer_repository_1.MockListCustomerRepository();
        useCases = new list_customer_1.ListCustomer(repository);
    });
    it('should list customers', async () => {
        const expected = [(0, customer_mock_1.mockCustomer)()];
        const listSpy = jest.spyOn(repository, 'list');
        const result = await useCases.execute({});
        expect(result).toBeDefined();
        expect(result).toStrictEqual(expected);
        expect(listSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=list-customer.spec.js.map