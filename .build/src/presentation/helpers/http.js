"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appError = exports.notFound = exports.serverError = exports.badRequest = exports.noContent = exports.created = exports.ok = void 0;
const http_1 = require("../../presentation/errors/http");
const ok = (body) => ({
    statusCode: 200,
    body,
});
exports.ok = ok;
const created = (body) => ({
    statusCode: 201,
    body,
});
exports.created = created;
const noContent = () => ({
    statusCode: 204,
    body: null,
});
exports.noContent = noContent;
const badRequest = (error) => ({
    statusCode: 400,
    body: error,
});
exports.badRequest = badRequest;
const serverError = (error) => ({
    statusCode: 500,
    body: new http_1.ServerError(error instanceof Error ? error : undefined),
});
exports.serverError = serverError;
const notFound = (error) => ({
    statusCode: 404,
    body: error,
});
exports.notFound = notFound;
const appError = (error) => ({
    statusCode: 400,
    body: error,
});
exports.appError = appError;
//# sourceMappingURL=http.js.map