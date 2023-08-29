"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const find_customer_1 = require("@/use-cases/customers/find-customer");
const find_customer_2 = require("@/presentation/controllers/customers/find-customer");
const customer_mock_1 = require("../../../../mocks/domain/models/customer-mock");
const http_1 = require("@/presentation/helpers/http");
describe('FindCustomerController', () => {
    let useCases;
    let controller;
    let repository;
    beforeEach(() => {
        repository = {
            find: jest.fn(),
        };
        useCases = new find_customer_1.FindCustomer(repository);
        controller = new find_customer_2.FindCustomerController(useCases);
    });
    it('should return a customer when service success', async () => {
        const expectedCustomer = (0, customer_mock_1.mockCustomer)();
        jest.spyOn(useCases, 'execute').mockResolvedValue(expectedCustomer);
        const httpRequest = { uuid: '123' };
        const response = await controller.perform(httpRequest);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
        expect(response).toEqual((0, http_1.ok)(expectedCustomer));
    });
    it('should throw an error when service fails', async () => {
        const httpRequest = { uuid: '123' };
        const mockError = new Error('Something went wrong');
        jest.spyOn(useCases, 'execute').mockRejectedValue(mockError);
        await expect(controller.perform(httpRequest)).rejects.toThrowError(mockError);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
    });
});
//# sourceMappingURL=find-customer.spec.js.map