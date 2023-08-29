import { DynamoDBConnection } from './connection';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export abstract class DynamoDbRepository {
  getConnection(): DocumentClient {
    const connection = new DynamoDBConnection();

    return connection.getClient();
  }
}
