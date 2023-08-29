"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const find_customer_1 = require("@/main/routes/customers/find-customer");
const find_customer_2 = require("@/presentation/controllers/customers/find-customer");
jest.mock('@/infra/repositories/dynamodb/helpers/connection');
jest.mock('@/infra/repositories/dynamodb/customers/customer.repository');
jest.mock('@/use-cases/customers/find-customer');
jest.mock('@/presentation/controllers/customers/find-customer');
describe('Find customer router', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call controller with the correct input', async () => {
        const mockLambdaEvent = {
            httpMethod: 'GET',
            path: '/customers/someCustomerId',
        };
        const controllerPerformSpy = jest.spyOn(find_customer_2.FindCustomerController.prototype, 'perform');
        await (0, find_customer_1.router)(mockLambdaEvent);
        expect(controllerPerformSpy).toHaveBeenCalledWith({ uuid: 'someCustomerId' });
    });
    it('should handle errors and return a 500 response', async () => {
        const mockLambdaEvent = {
            httpMethod: 'GET',
            path: '/customers/someCustomerId',
        };
        const mockError = new Error('Something went wrong');
        const controllerPerformSpy = jest.spyOn(find_customer_2.FindCustomerController.prototype, 'perform');
        controllerPerformSpy.mockRejectedValue(mockError);
        const response = await (0, find_customer_1.router)(mockLambdaEvent);
        expect(response.statusCode).toBe(500);
        expect(response.message).toBe(mockError.message);
    });
});
//# sourceMappingURL=find-customer.spec.js.map