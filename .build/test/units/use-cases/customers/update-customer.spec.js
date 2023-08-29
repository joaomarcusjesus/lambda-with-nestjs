"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_customer_1 = require("@/use-cases/customers/update-customer");
const mock_find_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-find-customer-repository");
const mock_update_customer_repository_1 = require("../../../mocks/use-cases/contracts/repository/customers/mock-update-customer-repository");
const create_customer_1 = require("../../../mocks/http/customers/create-customer");
describe('UpdateCustomerUseCases', () => {
    let useCases;
    let repositoryUpdateRepository;
    let repositoryFindRepository;
    beforeEach(() => {
        repositoryUpdateRepository = new mock_update_customer_repository_1.MockUpdateCustomerRepository();
        repositoryFindRepository = new mock_find_customer_repository_1.MockFindCustomerRepository();
        useCases = new update_customer_1.UpdateCustomer(repositoryUpdateRepository, repositoryFindRepository);
    });
    it('should update a customer', async () => {
        const input = Object.assign(Object.assign({}, (0, create_customer_1.mockHttpCustomer)()), { uuid: 'uuid' });
        const udpateSpy = jest.spyOn(repositoryUpdateRepository, 'update');
        const findSpy = jest.spyOn(repositoryFindRepository, 'find');
        await useCases.execute(input);
        expect(findSpy).toHaveBeenCalledTimes(1);
        expect(findSpy).toHaveBeenCalledWith({ uuid: input.uuid });
        expect(udpateSpy).toHaveBeenCalledTimes(1);
        expect(udpateSpy).toHaveBeenCalledWith(input);
    });
});
//# sourceMappingURL=update-customer.spec.js.map