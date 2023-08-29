"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerController = void 0;
const controller_1 = require("../../../presentation/contracts/controller");
const http_1 = require("../../../presentation/helpers/http");
class UpdateCustomerController extends controller_1.Controller {
    constructor(service) {
        super();
        this.service = service;
    }
    async perform(httpRequest) {
        await this.service.execute(httpRequest);
        return (0, http_1.noContent)();
    }
}
exports.UpdateCustomerController = UpdateCustomerController;
//# sourceMappingURL=update-customer.js.map