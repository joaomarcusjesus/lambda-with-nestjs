import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import IDynamoDBClient from './dynamodb-client';
export declare class DynamoDBClient implements IDynamoDBClient {
    private client;
    constructor();
    getClient(): DocumentClient;
}
