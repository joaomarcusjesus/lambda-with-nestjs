import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';
import { mockHttpCustomer } from '../../../../../mocks/http/customers/create-customer';

describe('CreateCustomerRepositoryDynamodb', () => {
  let mockPut;
  let mockConnection;
  let mockGetConnection;
  let mockRepository;

  beforeEach(() => {
    mockPut = jest.fn().mockReturnValue({ promise: jest.fn().mockResolvedValue({}) });
    mockConnection = { put: mockPut };
    mockGetConnection = jest.fn().mockReturnValue(mockConnection);

    mockRepository = new DynamodbCustomerRepository();
    mockRepository.getConnection = mockGetConnection;
  });

  it('should create customer', async () => {
    // Set
    const input = mockHttpCustomer();

    // Actions
    await mockRepository.create(input);

    // Assertions
    expect(mockPut).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: 'customers' }),
    );
  });
});
