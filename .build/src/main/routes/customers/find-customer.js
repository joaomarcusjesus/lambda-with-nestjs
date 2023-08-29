"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const customer_repository_1 = require("../../../infra/repositories/dynamodb/customers/customer.repository");
const find_customer_1 = require("../../../use-cases/customers/find-customer");
const find_customer_2 = require("../../../presentation/controllers/customers/find-customer");
const response_1 = require("../../../main/decorator/response");
const connection_1 = require("../../../infra/repositories/dynamodb/helpers/connection");
const router = async (event) => {
    try {
        const segments = event.path.split('/').filter((segment) => segment !== '');
        const customerId = segments[1];
        const repository = new customer_repository_1.CustomerRepository(new connection_1.DynamoDBClient());
        const service = new find_customer_1.FindCustomer(repository);
        const controller = new find_customer_2.FindCustomerController(service);
        const response = await controller.perform({
            uuid: customerId,
        });
        return {
            statusCode: 200,
            body: JSON.stringify({ data: response.body }),
        };
    }
    catch (error) {
        return (0, response_1.responseDecorator)(500, { error });
    }
};
exports.router = router;
//# sourceMappingURL=find-customer.js.map