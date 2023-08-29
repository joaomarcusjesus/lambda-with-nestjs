"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersistError = exports.EntityNotFound = exports.TransactionNotFoundError = exports.ConnectionNotFoundError = void 0;
class ConnectionNotFoundError extends Error {
    constructor() {
        super('No connection was found');
        this.name = 'ConnectionNotFoundError';
    }
}
exports.ConnectionNotFoundError = ConnectionNotFoundError;
class TransactionNotFoundError extends Error {
    constructor() {
        super('No transaction was found');
        this.name = 'TransactionNotFoundError';
    }
}
exports.TransactionNotFoundError = TransactionNotFoundError;
class EntityNotFound extends Error {
    constructor() {
        super('No entity was found');
        this.name = 'EntityNotFound';
    }
}
exports.EntityNotFound = EntityNotFound;
class PersistError extends Error {
    constructor() {
        super('Not persisted');
        this.name = 'PersistError';
    }
}
exports.PersistError = PersistError;
//# sourceMappingURL=errors.js.map