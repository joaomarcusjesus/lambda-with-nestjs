"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const customer_repository_1 = require("../../../infra/repositories/dynamodb/customers/customer.repository");
const create_customer_1 = require("../../../use-cases/customers/create-customer");
const create_customer_2 = require("../../../presentation/controllers/customers/create-customer");
const response_1 = require("../../../main/decorator/response");
const connection_1 = require("../../../infra/repositories/dynamodb/helpers/connection");
const router = async (event) => {
    try {
        const repository = new customer_repository_1.CustomerRepository(new connection_1.DynamoDBClient());
        const service = new create_customer_1.CreateCustomer(repository);
        const controller = new create_customer_2.CreateCustomerController(service);
        if (event.body === null) {
            throw new Error();
        }
        const requestBody = JSON.parse(event.body);
        const input = {
            first_name: requestBody.first_name,
            last_name: requestBody.last_name,
            email: requestBody.email,
            phone: requestBody.phone,
        };
        return await controller.perform(input);
    }
    catch (error) {
        return (0, response_1.responseDecorator)(500, { error });
    }
};
exports.router = router;
//# sourceMappingURL=create-customer.js.map