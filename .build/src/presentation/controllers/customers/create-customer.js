"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
const http_1 = require("../../../presentation/helpers/http");
const controller_1 = require("../../../presentation/contracts/controller");
class CreateCustomerController extends controller_1.Controller {
    constructor(service) {
        super();
        this.service = service;
    }
    async perform(httpRequest) {
        await this.service.execute(httpRequest);
        return (0, http_1.noContent)();
    }
}
exports.CreateCustomerController = CreateCustomerController;
//# sourceMappingURL=create-customer.js.map