"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const update_customer_1 = require("@/main/routes/customers/update-customer");
const update_customer_2 = require("@/presentation/controllers/customers/update-customer");
const create_customer_1 = require("../../../../mocks/http/customers/create-customer");
jest.mock('@/infra/repositories/dynamodb/helpers/connection');
jest.mock('@/infra/repositories/dynamodb/customers/customer.repository');
jest.mock('@/use-cases/customers/update-customer');
jest.mock('@/presentation/controllers/customers/update-customer');
describe('Update customer router', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call controller with the correct input', async () => {
        const mockLambdaEvent = {
            httpMethod: 'POST',
            path: '/customers/someCustomerId',
            body: JSON.stringify((0, create_customer_1.mockHttpCustomer)()),
        };
        const expected = {
            uuid: 'someCustomerId',
            first_name: 'John',
            last_name: 'Doe',
            email: 'johndoe@gmail.com',
            phone: '5583999351425',
        };
        const controllerPerformSpy = jest
            .spyOn(update_customer_2.UpdateCustomerController.prototype, 'perform')
            .mockResolvedValue({
            statusCode: 204,
            body: undefined,
        });
        const result = await (0, update_customer_1.router)(mockLambdaEvent);
        expect(result.statusCode).toBe(204);
        expect(controllerPerformSpy).toHaveBeenCalledWith(expected);
    });
    it('should handle errors and return a 500 response', async () => {
        const mockLambdaEvent = {
            httpMethod: 'POST',
            path: '/customers/someCustomerId',
            body: JSON.stringify((0, create_customer_1.mockHttpCustomer)()),
        };
        const mockError = new Error('Something went wrong');
        jest
            .spyOn(update_customer_2.UpdateCustomerController.prototype, 'perform')
            .mockRejectedValue(mockError);
        const response = await (0, update_customer_1.router)(mockLambdaEvent);
        expect(response.statusCode).toBe(500);
        expect(response.message).toBe(mockError.message);
    });
});
//# sourceMappingURL=update-customer.spec.js.map