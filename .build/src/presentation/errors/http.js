"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
class ServerError extends Error {
    constructor(error) {
        super('Server failed. Try again soon');
        this.name = 'ServerError';
        this.stack = error === null || error === void 0 ? void 0 : error.stack;
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=http.js.map