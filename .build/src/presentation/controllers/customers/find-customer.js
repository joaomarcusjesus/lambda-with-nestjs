"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindCustomerController = void 0;
const controller_1 = require("../../../presentation/contracts/controller");
const http_1 = require("../../../presentation/helpers/http");
class FindCustomerController extends controller_1.Controller {
    constructor(service) {
        super();
        this.service = service;
    }
    async perform(httpRequest) {
        const customer = await this.service.execute(httpRequest);
        return (0, http_1.ok)(customer);
    }
}
exports.FindCustomerController = FindCustomerController;
//# sourceMappingURL=find-customer.js.map