import { DynamodbCustomerRepository } from '@/infra/repositories/dynamodb/customers/customer.repository';
import { mockHttpCustomer } from '../../../../../mocks/http/customers/create-customer';

describe('UpdateCustomerRepositoryDynamodb', () => {
  let mockUpdate;
  let mockConnection;
  let mockGetConnection;
  let mockRepository;

  beforeEach(() => {
    mockUpdate = jest.fn().mockReturnValue({ promise: jest.fn().mockResolvedValue({}) });
    mockConnection = { update: mockUpdate };
    mockGetConnection = jest.fn().mockReturnValue(mockConnection);

    mockRepository = new DynamodbCustomerRepository();
    mockRepository.getConnection = mockGetConnection;
  });

  it('should update customer', async () => {
    // Set
    const input = {
      uuid: 'uuid',
      ...mockHttpCustomer(),
    };

    // Actions
    await mockRepository.update(input);

    // Assertions
    expect(mockUpdate).toHaveBeenCalledWith(
      expect.objectContaining({ TableName: 'customers' }),
    );
  });
});
