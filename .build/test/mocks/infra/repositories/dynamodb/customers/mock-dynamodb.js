"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockDynamodbList = exports.mockCustomerDynamodb = void 0;
const mockCustomerDynamodb = () => ({
    id: 'uuid',
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@gmail.com',
    phone: '5583999351425',
});
exports.mockCustomerDynamodb = mockCustomerDynamodb;
const mockDynamodbList = () => ({
    Items: [(0, exports.mockCustomerDynamodb)()],
});
exports.mockDynamodbList = mockDynamodbList;
//# sourceMappingURL=mock-dynamodb.js.map