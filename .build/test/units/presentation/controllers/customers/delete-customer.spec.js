"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@/presentation/helpers/http");
const customers_1 = require("@/use-cases/customers");
const delete_customer_1 = require("@/presentation/controllers/customers/delete-customer");
describe('DeleteCustomerController', () => {
    let useCases;
    let controller;
    let repository;
    beforeEach(() => {
        repository = {
            delete: jest.fn(),
        };
        useCases = new customers_1.DeleteCustomer(repository);
        controller = new delete_customer_1.DeleteCustomerController(useCases);
    });
    it('should return a customer when service success', async () => {
        jest.spyOn(useCases, 'execute').mockResolvedValue();
        const httpRequest = {
            uuid: '123',
        };
        const response = await controller.perform(httpRequest);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
        expect(response).toEqual((0, http_1.noContent)());
    });
    it('should throw an error when service fails', async () => {
        const httpRequest = {
            uuid: '123',
        };
        const mockError = new Error('Something went wrong');
        jest.spyOn(useCases, 'execute').mockRejectedValue(mockError);
        await expect(controller.perform(httpRequest)).rejects.toThrowError(mockError);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
    });
});
//# sourceMappingURL=delete-customer.spec.js.map