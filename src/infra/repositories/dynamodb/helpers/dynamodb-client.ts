import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export abstract class IDynamoDBClient {
  static getClient: () => Promise<DocumentClient>;
}
