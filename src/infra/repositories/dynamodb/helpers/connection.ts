import { DocumentClient } from 'aws-sdk/clients/dynamodb';

export class DynamoDBConnection {
  private client: DocumentClient;

  constructor() {
    this.client = new DocumentClient({
      region: 'us-east-1',
    });
  }

  getClient(): DocumentClient {
    return this.client;
  }
}
