"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_customer_1 = require("@/presentation/controllers/customers/update-customer");
const http_1 = require("@/presentation/helpers/http");
const customers_1 = require("@/use-cases/customers");
const create_customer_1 = require("../../../../mocks/http/customers/create-customer");
describe('UpdateCustomerController', () => {
    let useCases;
    let controller;
    let updateCustomerRepository;
    let findCustomerRepository;
    beforeEach(() => {
        updateCustomerRepository = {
            update: jest.fn(),
        };
        findCustomerRepository = {
            find: jest.fn(),
        };
        useCases = new customers_1.UpdateCustomer(updateCustomerRepository, findCustomerRepository);
        controller = new update_customer_1.UpdateCustomerController(useCases);
    });
    it('should return a customer when service success', async () => {
        jest.spyOn(useCases, 'execute').mockResolvedValue();
        const httpRequest = Object.assign(Object.assign({}, (0, create_customer_1.mockHttpCustomer)()), { uuid: '123' });
        const response = await controller.perform(httpRequest);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
        expect(response).toEqual((0, http_1.noContent)());
    });
    it('should throw an error when service fails', async () => {
        const httpRequest = Object.assign(Object.assign({}, (0, create_customer_1.mockHttpCustomer)()), { uuid: '123' });
        const mockError = new Error('Something went wrong');
        jest.spyOn(useCases, 'execute').mockRejectedValue(mockError);
        await expect(controller.perform(httpRequest)).rejects.toThrowError(mockError);
        expect(useCases.execute).toHaveBeenCalledWith(httpRequest);
    });
});
//# sourceMappingURL=update-customer.spec.js.map