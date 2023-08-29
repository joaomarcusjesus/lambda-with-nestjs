import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';
import { mockDynamodbList } from '../../../../../mocks/infra/repositories/dynamodb/customers/mock-dynamodb';
import { mockCustomer } from '../../../../../mocks/domain/models/customer-mock';

describe('ListCustomerRepositoryDynamodb', () => {
  let mockScan;
  let mockConnection;
  let mockGetConnection;
  let mockRepository;

  beforeEach(() => {
    mockScan = jest
      .fn()
      .mockReturnValue({ promise: jest.fn().mockResolvedValue(mockDynamodbList()) });
    mockConnection = { scan: mockScan };
    mockGetConnection = jest.fn().mockReturnValue(mockConnection);

    mockRepository = new DynamodbCustomerRepository();
    mockRepository.getConnection = mockGetConnection;
  });

  it('should list customers', async () => {
    // Set
    const input = { search: 'uuid' };
    const expeceted = [mockCustomer()];

    // Actions
    const result = await mockRepository.list(input);

    // Assertions
    expect(result).toEqual(expeceted);
    expect(mockScan).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: 'customers' }),
    );
  });
});
