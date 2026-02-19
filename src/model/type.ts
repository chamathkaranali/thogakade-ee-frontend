export interface CustomerModel {
    id: string;
    title: string;
    custName: string;
    dob: object;
    salary: number;
    address: string;
    city: string;
    province: string;
    postalCode: string;
}

export interface ApiResponse<T>{
    content:T;
    message:string;
    status:number;
    timestamp:string;
}