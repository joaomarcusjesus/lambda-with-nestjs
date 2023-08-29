"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const delete_customer_1 = require("@/main/routes/customers/delete-customer");
const delete_customer_2 = require("@/presentation/controllers/customers/delete-customer");
jest.mock('@/infra/repositories/dynamodb/helpers/connection');
jest.mock('@/infra/repositories/dynamodb/customers/customer.repository');
jest.mock('@/use-cases/customers/delete-customer');
jest.mock('@/presentation/controllers/customers/delete-customer');
describe('Delete customer router', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should call controller with the correct input', async () => {
        const mockLambdaEvent = {
            httpMethod: 'DELETE',
            path: '/customers/someCustomerId',
        };
        const controllerPerformSpy = jest.spyOn(delete_customer_2.DeleteCustomerController.prototype, 'perform');
        await (0, delete_customer_1.router)(mockLambdaEvent);
        expect(controllerPerformSpy).toHaveBeenCalledWith({ uuid: 'someCustomerId' });
    });
    it('should handle errors and return a 500 response', async () => {
        const mockLambdaEvent = {
            httpMethod: 'GET',
            path: '/customers/someCustomerId',
        };
        const mockError = new Error('Something went wrong');
        const controllerPerformSpy = jest.spyOn(delete_customer_2.DeleteCustomerController.prototype, 'perform');
        controllerPerformSpy.mockRejectedValue(mockError);
        const response = await (0, delete_customer_1.router)(mockLambdaEvent);
        expect(response.statusCode).toBe(500);
        expect(response.message).toBe(mockError.message);
    });
});
//# sourceMappingURL=delete-customer.spec.js.map