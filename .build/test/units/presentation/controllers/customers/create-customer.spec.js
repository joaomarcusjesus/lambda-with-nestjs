"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@/presentation/helpers/http");
const customers_1 = require("@/use-cases/customers");
const create_customer_1 = require("@/presentation/controllers/customers/create-customer");
const create_customer_2 = require("../../../../mocks/http/customers/create-customer");
describe('CreateCustomerController', () => {
    let useCases;
    let controller;
    let repository;
    beforeEach(() => {
        repository = {
            create: jest.fn(),
        };
        useCases = new customers_1.CreateCustomer(repository);
        controller = new create_customer_1.CreateCustomerController(useCases);
    });
    it('should return a customer when service success', async () => {
        const httpRequest = (0, create_customer_2.mockHttpCustomer)();
        jest.spyOn(useCases, 'execute').mockResolvedValue();
        const response = await controller.perform(httpRequest);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
        expect(response).toEqual((0, http_1.noContent)());
    });
    it('should throw an error when service fails', async () => {
        const httpRequest = (0, create_customer_2.mockHttpCustomer)();
        const mockError = new Error('Something went wrong');
        jest.spyOn(useCases, 'execute').mockRejectedValue(mockError);
        await expect(controller.perform(httpRequest)).rejects.toThrowError(mockError);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
    });
});
//# sourceMappingURL=create-customer.spec.js.map