"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRepository = void 0;
const customer_mapper_1 = require("../mappers/customer.mapper");
const errors_1 = require("../helpers/errors");
const uuid_1 = require("uuid");
class CustomerRepository {
    constructor(dynamoDBClient) {
        this.dynamoDB = dynamoDBClient;
        this.tableName = 'customers';
    }
    async list(input) {
        const scanParams = {
            TableName: this.tableName,
        };
        if (input === null || input === void 0 ? void 0 : input.search) {
            scanParams.FilterExpression =
                'contains(id, :search) OR contains(first_name, :search) OR contains(last_name, :search) OR contains(email, :search) OR contains(phone, :search)';
            scanParams.ExpressionAttributeValues = {
                ':search': input.search,
            };
        }
        const entities = await this.dynamoDB.getClient().scan(scanParams).promise();
        const result = entities === null || entities === void 0 ? void 0 : entities.Items;
        if (!result || !entities) {
            return [];
        }
        return result.map((entity) => customer_mapper_1.CustomerMapper.ToDomain(entity));
    }
    async find(input) {
        const params = {
            TableName: this.tableName,
            Key: {
                id: input.uuid,
            },
        };
        const result = await this.dynamoDB.getClient().get(params).promise();
        if (!result) {
            throw new errors_1.EntityNotFound();
        }
        return customer_mapper_1.CustomerMapper.ToDomain(result === null || result === void 0 ? void 0 : result.Item);
    }
    async create(input) {
        const params = {
            TableName: this.tableName,
            Item: Object.assign(Object.assign({}, input), { id: (0, uuid_1.v4)() }),
        };
        const result = await this.dynamoDB.getClient().put(params).promise();
        if (!result) {
            throw new errors_1.PersistError();
        }
        return;
    }
    async update(input) {
        const params = {
            TableName: this.tableName,
            Key: {
                id: input.uuid,
            },
            UpdateExpression: 'set email = :email, first_name = :first_name, last_name = :last_name, phone = :phone',
            ExpressionAttributeValues: {
                ':email': input.email,
                ':first_name': input.first_name,
                ':last_name': input.last_name,
                ':phone': input.phone,
            },
            ReturnValues: 'UPDATED_NEW',
        };
        const result = await this.dynamoDB.getClient().update(params).promise();
        if (!result) {
            throw new errors_1.PersistError();
        }
        return;
    }
    async delete(input) {
        const params = {
            TableName: this.tableName,
            Key: {
                id: input.uuid,
            },
        };
        const result = await this.dynamoDB.getClient().delete(params).promise();
        if (!result) {
            throw new errors_1.PersistError();
        }
        return;
    }
}
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map