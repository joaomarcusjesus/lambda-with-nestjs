type CustomerData = {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
};
export declare class Customer {
    uuid: string;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    constructor(data: CustomerData);
}
export {};
