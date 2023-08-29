import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';
import { mockCustomer } from '../../../../../mocks/domain/models/customer-mock';
import { mockCustomerDynamodb } from '../../../../../mocks/infra/repositories/dynamodb/customers/mock-dynamodb';

describe('FindCustomerRepositoryDynamodb', () => {
  let mockGet;
  let mockConnection;
  let mockGetConnection;
  let mockRepository;

  beforeEach(() => {
    mockGet = jest.fn().mockReturnValue({
      promise: jest.fn().mockResolvedValue({
        Item: mockCustomerDynamodb(),
      }),
    });
    mockConnection = { get: mockGet };
    mockGetConnection = jest.fn().mockReturnValue(mockConnection);

    mockRepository = new DynamodbCustomerRepository();
    mockRepository.getConnection = mockGetConnection;
  });

  it('should find customer', async () => {
    // Set
    const input = {
      uuid: 'uuid',
    };
    const expected = mockCustomer();

    // Actions
    const result = await mockRepository.find(input);

    // Assertions
    expect(result).toEqual(expected);
    expect(mockGet).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: 'customers' }),
    );
  });
});
