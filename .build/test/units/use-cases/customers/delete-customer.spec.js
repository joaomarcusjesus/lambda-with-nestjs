"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customers_1 = require("@/use-cases/customers");
const mock_delete_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-delete-customer-repository");
describe('DeleteCustomerUseCases', () => {
    let useCases;
    let repository;
    beforeEach(() => {
        repository = new mock_delete_customer_repository_1.MockDeleteCustomerRepository();
        useCases = new customers_1.DeleteCustomer(repository);
    });
    it('should delete custoemr by uuid', async () => {
        const input = {
            uuid: 'uuid',
        };
        const deleteSpy = jest.spyOn(repository, 'delete');
        await useCases.execute(input);
        expect(deleteSpy).toHaveBeenCalledTimes(1);
        expect(deleteSpy).toHaveBeenCalledWith(input);
    });
});
//# sourceMappingURL=delete-customer.spec.js.map