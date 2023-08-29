"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamoDBClient = void 0;
const dynamodb_1 = require("aws-sdk/clients/dynamodb");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
class DynamoDBClient {
    constructor() {
        new client_dynamodb_1.DynamoDB({
            region: 'us-east-1',
        });
        this.client = new dynamodb_1.DocumentClient();
    }
    getClient() {
        return this.client;
    }
}
exports.DynamoDBClient = DynamoDBClient;
//# sourceMappingURL=connection.js.map