"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseDecorator = void 0;
const responseDecorator = (statusCode, data) => {
    return {
        statusCode: statusCode,
        message: 'Something went wrong',
        body: JSON.stringify({ data }),
    };
};
exports.responseDecorator = responseDecorator;
//# sourceMappingURL=response.js.map