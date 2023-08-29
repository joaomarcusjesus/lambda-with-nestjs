"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customer_repository_1 = require("@/infra/repositories/dynamodb/customers/customer.repository");
const mock_dynamodb_1 = require("../../../../../mocks/infra/repositories/dynamodb/customers/mock-dynamodb");
const customer_mock_1 = require("../../../../../mocks/domain/models/customer-mock");
const customer_mapper_1 = require("@/infra/repositories/dynamodb/mappers/customer.mapper");
const create_customer_1 = require("../../../../../mocks/http/customers/create-customer");
describe('CustomerRepository', () => {
    let repository;
    let mockScan;
    let mockPut;
    let mockUpdate;
    let mockDelete;
    beforeEach(() => {
        mockScan = jest.fn();
        mockPut = jest.fn();
        mockUpdate = jest.fn();
        mockDelete = jest.fn();
        const mockDocumentClient = {
            scan: mockScan,
            put: mockPut,
            update: mockUpdate,
            delete: mockDelete,
        };
        const MockDynamoDBClient = {
            getClient: jest.fn().mockReturnValue(mockDocumentClient),
        };
        repository = new customer_repository_1.CustomerRepository(MockDynamoDBClient);
        repository.tableName = 'customers';
    });
    describe('list customers', () => {
        it('should return a list of customers', async () => {
            const mockCustomers = (0, mock_dynamodb_1.mockDynamodbList)();
            const expected = [(0, customer_mock_1.mockCustomer)()];
            mockScan.mockReturnValueOnce({
                promise: jest.fn().mockResolvedValue(mockCustomers),
            });
            const result = await repository.list();
            expect(result).toEqual(expected);
        });
        it('should items empty result', async () => {
            mockScan.mockReturnValueOnce({
                promise: jest.fn().mockResolvedValue({ Items: [] }),
            });
            const result = await repository.list();
            expect(result).toEqual([]);
        });
        it('should promise empty result', async () => {
            mockScan.mockReturnValueOnce({ promise: jest.fn().mockResolvedValue({}) });
            const result = await repository.list();
            expect(result).toEqual([]);
        });
        it('should items is null', async () => {
            mockScan.mockReturnValueOnce({
                promise: jest.fn().mockResolvedValue({ Items: null }),
            });
            const result = await repository.list();
            expect(result).toEqual([]);
        });
        it('should map entities to domain objects', async () => {
            const mockEntities = [(0, mock_dynamodb_1.mockDynamodbList)()];
            const mockCustomerDomain = (0, customer_mock_1.mockCustomer)();
            customer_mapper_1.CustomerMapper.ToDomain = jest.fn().mockReturnValue(mockCustomerDomain);
            mockScan.mockReturnValueOnce({
                promise: jest.fn().mockResolvedValue({ Items: mockEntities }),
            });
            const result = await repository.list();
            expect(result).toEqual([mockCustomerDomain]);
        });
        it('should error in scan operation', async () => {
            const mockError = new Error();
            mockScan.mockReturnValueOnce({ promise: jest.fn().mockRejectedValue(mockError) });
            await expect(repository.list()).rejects.toThrow(mockError);
        });
        it('should return a list of customers matching the name search', async () => {
            const searchName = 'John doe';
            const mockCustomers = [(0, customer_mock_1.mockCustomer)(), (0, customer_mock_1.mockCustomer)()];
            const mockEntities = mockCustomers.map((customer) => customer_mapper_1.CustomerMapper.ToDomain(customer));
            mockScan.mockReturnValueOnce({
                promise: jest.fn().mockResolvedValue({ Items: mockEntities }),
            });
            const result = await repository.list({ search: searchName });
            const expected = mockCustomers.map((customer) => customer_mapper_1.CustomerMapper.ToDomain(customer));
            expect(result).toEqual(expected);
            expect(mockScan).toHaveBeenCalledWith({
                TableName: repository.tableName,
                FilterExpression: 'contains(id, :search) OR contains(first_name, :search) OR contains(last_name, :search) OR contains(email, :search) OR contains(phone, :search)',
                ExpressionAttributeValues: {
                    ':search': searchName,
                },
            });
        });
    });
    describe('create customer', () => {
        it('should create a customer successfully', async () => {
            const input = (0, create_customer_1.mockHttpCustomer)();
            mockPut.mockReturnValueOnce({ promise: jest.fn().mockResolvedValue({}) });
            await repository.create(input);
            expect(mockPut).toHaveBeenCalledWith({
                TableName: repository.tableName,
                Item: expect.objectContaining(Object.assign(Object.assign({}, input), { id: expect.any(String) })),
            });
        });
        it('should throw an error when creation fails', async () => {
            const input = (0, create_customer_1.mockHttpCustomer)();
            const mockError = new Error();
            mockPut.mockReturnValueOnce({ promise: jest.fn().mockRejectedValue(mockError) });
            await expect(repository.create(input)).rejects.toThrow(mockError);
        });
        it('should throw an error when creation fails', async () => {
            const input = (0, create_customer_1.mockHttpCustomer)();
            const mockError = new Error();
            mockPut.mockReturnValueOnce({ promise: jest.fn().mockRejectedValue(mockError) });
            await expect(repository.create(input)).rejects.toThrow(mockError);
        });
    });
    describe('update customer', () => {
        it('should update a customer successfully', async () => {
            const input = Object.assign(Object.assign({}, (0, create_customer_1.mockHttpCustomer)()), { uuid: 'uuid' });
            mockUpdate.mockReturnValueOnce({ promise: jest.fn().mockResolvedValue({}) });
            await repository.update(input);
            expect(mockUpdate).toHaveBeenCalledWith({
                TableName: repository.tableName,
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
            });
        });
        it('should throw an error when update fails', async () => {
            const input = Object.assign(Object.assign({}, (0, create_customer_1.mockHttpCustomer)()), { uuid: 'uuid' });
            const mockError = new Error();
            mockUpdate.mockReturnValueOnce({ promise: jest.fn().mockRejectedValue(mockError) });
            await expect(repository.update(input)).rejects.toThrow(mockError);
        });
    });
    describe('delete customer', () => {
        it('should delete a customer successfully', async () => {
            const input = {
                uuid: 'uuid',
            };
            mockDelete.mockReturnValueOnce({ promise: jest.fn().mockResolvedValue({}) });
            await repository.delete(input);
            expect(mockDelete).toHaveBeenCalledWith({
                TableName: repository.tableName,
                Key: {
                    id: input.uuid,
                },
            });
        });
        it('should throw an error when delete fails', async () => {
            const input = {
                uuid: 'uuid',
            };
            const mockError = new Error();
            mockDelete.mockReturnValueOnce({ promise: jest.fn().mockRejectedValue(mockError) });
            await expect(repository.delete(input)).rejects.toThrow(mockError);
        });
    });
});
//# sourceMappingURL=customer.repository.spec.js.map