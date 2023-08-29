"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const customer_repository_1 = require("../../../infra/repositories/dynamodb/customers/customer.repository");
const delete_customer_1 = require("../../../use-cases/customers/delete-customer");
const delete_customer_2 = require("../../../presentation/controllers/customers/delete-customer");
const response_1 = require("../../../main/decorator/response");
const connection_1 = require("../../../infra/repositories/dynamodb/helpers/connection");
const router = async (event) => {
    try {
        const repository = new customer_repository_1.CustomerRepository(new connection_1.DynamoDBClient());
        const service = new delete_customer_1.DeleteCustomer(repository);
        const controller = new delete_customer_2.DeleteCustomerController(service);
        const segments = event.path.split('/').filter((segment) => segment !== '');
        const customerId = segments[1];
        return await controller.perform({
            uuid: customerId,
        });
    }
    catch (error) {
        return (0, response_1.responseDecorator)(500, { error });
    }
};
exports.router = router;
//# sourceMappingURL=delete-customer.js.map