import { Customer as CustomerDomain } from '../../../../domain/models/customer';
import { CustomerEntity } from '../entities/customer.entity';
export declare class CustomerMapper {
    static ToDomain(entity: CustomerEntity): CustomerDomain;
}
