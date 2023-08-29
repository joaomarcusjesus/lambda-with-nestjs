export const mockCustomerDynamodb = () => ({
  id: 'uuid',
  first_name: 'John',
  last_name: 'Doe',
  email: 'johndoe@gmail.com',
  phone: '5583999351425',
  password: '123',
});

export const mockDynamodbList = () => ({
  Items: [mockCustomerDynamodb()],
});
