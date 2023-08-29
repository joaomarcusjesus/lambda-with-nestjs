"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_customer_1 = require("@/main/routes/customers/list-customer");
const list_customer_2 = require("@/presentation/controllers/customers/list-customer");
jest.mock('@/infra/repositories/dynamodb/helpers/connection');
jest.mock('@/infra/repositories/dynamodb/customers/customer.repository');
jest.mock('@/use-cases/customers/list-customer');
jest.mock('@/presentation/controllers/customers/list-customer');
describe('List customer router', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call controller with the correct input', async () => {
        const mockLambdaEvent = {
            httpMethod: 'GET',
            path: '/customers',
        };
        jest.spyOn(list_customer_2.ListCustomerController.prototype, 'perform').mockResolvedValue({
            statusCode: 200,
            body: [],
        });
        const result = await (0, list_customer_1.router)(mockLambdaEvent);
        expect(result.statusCode).toBe(200);
    });
    it('should handle errors and return a 500 response', async () => {
        const mockLambdaEvent = {
            httpMethod: 'GET',
            path: '/customers',
        };
        const mockError = new Error('Something went wrong');
        jest.spyOn(list_customer_2.ListCustomerController.prototype, 'perform').mockRejectedValue(mockError);
        const response = await (0, list_customer_1.router)(mockLambdaEvent);
        expect(response.statusCode).toBe(500);
    });
});
//# sourceMappingURL=list-customer.spec.js.map