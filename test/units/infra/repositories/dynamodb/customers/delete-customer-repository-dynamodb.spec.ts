import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';

describe('DeleteCustomerRepositoryDynamodb', () => {
  let mockDelete;
  let mockConnection;
  let mockGetConnection;
  let mockRepository;

  beforeEach(() => {
    mockDelete = jest.fn().mockReturnValue({ promise: jest.fn().mockResolvedValue({}) });
    mockConnection = { delete: mockDelete };
    mockGetConnection = jest.fn().mockReturnValue(mockConnection);

    mockRepository = new DynamodbCustomerRepository();
    mockRepository.getConnection = mockGetConnection;
  });

  it('should delete customer', async () => {
    // Set
    const input = {
      uuid: 'uuid',
    };

    // Actions
    await mockRepository.delete(input);

    // Assertions
    expect(mockDelete).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: 'customers' }),
    );
  });
});
