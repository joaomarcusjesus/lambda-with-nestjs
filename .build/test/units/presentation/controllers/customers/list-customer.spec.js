"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_mock_1 = require("../../../../mocks/domain/models/customer-mock");
const http_1 = require("@/presentation/helpers/http");
const list_customer_1 = require("@/use-cases/customers/list-customer");
const list_customer_2 = require("@/presentation/controllers/customers/list-customer");
describe('ListCustomerController', () => {
    let useCases;
    let controller;
    let repository;
    beforeEach(() => {
        repository = {
            list: jest.fn(),
        };
        useCases = new list_customer_1.ListCustomer(repository);
        controller = new list_customer_2.ListCustomerController(useCases);
    });
    it('should return a customer when service success', async () => {
        jest.spyOn(useCases, 'execute').mockResolvedValue([(0, customer_mock_1.mockCustomer)()]);
        const expectedCustomer = [(0, customer_mock_1.mockCustomer)()];
        const response = await controller.perform({});
        expect(useCases.execute).toHaveBeenCalledWith({});
        expect(response).toEqual((0, http_1.ok)(expectedCustomer));
    });
    it('should throw an error when service fails', async () => {
        const mockError = new Error('Something went wrong');
        jest.spyOn(useCases, 'execute').mockRejectedValue(mockError);
        await expect(controller.perform({})).rejects.toThrowError(mockError);
        expect(useCases.execute).toHaveBeenCalledWith({});
    });
});
//# sourceMappingURL=list-customer.spec.js.map