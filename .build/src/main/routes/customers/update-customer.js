"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const customer_repository_1 = require("../../../infra/repositories/dynamodb/customers/customer.repository");
const update_customer_1 = require("../../../use-cases/customers/update-customer");
const update_customer_2 = require("../../../presentation/controllers/customers/update-customer");
const response_1 = require("../../../main/decorator/response");
const connection_1 = require("../../../infra/repositories/dynamodb/helpers/connection");
const router = async (event) => {
    try {
        const segments = event.path.split('/').filter((segment) => segment !== '');
        const customerId = segments[1];
        const repository = new customer_repository_1.CustomerRepository(new connection_1.DynamoDBClient());
        const service = new update_customer_1.UpdateCustomer(repository, repository);
        const controller = new update_customer_2.UpdateCustomerController(service);
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
        return await controller.perform(Object.assign(Object.assign({}, input), { uuid: customerId }));
    }
    catch (error) {
        return (0, response_1.responseDecorator)(500, { error });
    }
};
exports.router = router;
//# sourceMappingURL=update-customer.js.map