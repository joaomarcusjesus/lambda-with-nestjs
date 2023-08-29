"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_customer_1 = require("@/main/routes/customers/create-customer");
const create_customer_2 = require("@/presentation/controllers/customers/create-customer");
const create_customer_3 = require("../../../../mocks/http/customers/create-customer");
jest.mock('@/infra/repositories/dynamodb/helpers/connection');
jest.mock('@/infra/repositories/dynamodb/customers/customer.repository');
jest.mock('@/use-cases/customers/create-customer');
jest.mock('@/presentation/controllers/customers/create-customer');
describe('Create customer router', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it('should call controller with the correct input', async () => {
        const mockLambdaEvent = {
            httpMethod: 'POST',
            path: '/customers',
            body: JSON.stringify((0, create_customer_3.mockHttpCustomer)()),
        };
        jest.spyOn(create_customer_2.CreateCustomerController.prototype, 'perform').mockResolvedValue({
            statusCode: 204,
            body: undefined,
        });
        const result = await (0, create_customer_1.router)(mockLambdaEvent);
        expect(result.statusCode).toBe(204);
    });
    it('should handle errors and return a 500 response', async () => {
        const mockLambdaEvent = {
            httpMethod: 'POST',
            path: '/customers',
            body: JSON.stringify((0, create_customer_3.mockHttpCustomer)()),
        };
        const mockError = new Error('Something went wrong');
        jest
            .spyOn(create_customer_2.CreateCustomerController.prototype, 'perform')
            .mockRejectedValue(mockError);
        const response = await (0, create_customer_1.router)(mockLambdaEvent);
        expect(response.statusCode).toBe(500);
        expect(response.message).toBe(mockError.message);
    });
});
//# sourceMappingURL=create-customer.spec.js.map