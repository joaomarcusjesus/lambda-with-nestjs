"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const list_customer_1 = require("../../../use-cases/customers/list-customer");
const customer_repository_1 = require("../../../infra/repositories/dynamodb/customers/customer.repository");
const list_customer_2 = require("../../../presentation/controllers/customers/list-customer");
const connection_1 = require("../../../infra/repositories/dynamodb/helpers/connection");
const router = async (event) => {
    var _a;
    try {
        const repository = new customer_repository_1.CustomerRepository(new connection_1.DynamoDBClient());
        const service = new list_customer_1.ListCustomer(repository);
        const controller = new list_customer_2.ListCustomerController(service);
        const searchQuery = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.search;
        const response = await controller.perform({ search: searchQuery });
        return {
            statusCode: 200,
            body: JSON.stringify({ data: response.body }),
        };
    }
    catch (error) {
        const response = {
            statusCode: 500,
            body: JSON.stringify({ message: 'Ocorreu um erro ao listar cliente' }),
        };
        return response;
    }
};
exports.router = router;
//# sourceMappingURL=list-customer.js.map