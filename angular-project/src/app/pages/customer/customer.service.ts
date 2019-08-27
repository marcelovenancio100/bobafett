import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { URL_SERVER } from 'src/app/utils/urls.helpers';
import { Customer } from './customer';
import { CustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private httpClient: HttpClient) { }

    public getCustomer(id: number): Observable<Customer> {
        return this.httpClient.get<Customer>(`${URL_SERVER}/customer/v1/getCustomer/${id}`);
    }

    public getCustomersCount(customerDto: CustomerDto): Observable<number> {
        return this.httpClient.post<number>(`${URL_SERVER}/customer/v1/getCustomersCount`, customerDto, {headers: this.headers});
    }

    public getCustomers(customerDto: CustomerDto): Observable<Array<Customer>> {
        return this.httpClient.post<Array<Customer>>(`${URL_SERVER}/customer/v1/getCustomers`, customerDto, {headers: this.headers});
    }

    public saveCustomer(customer: Customer): Observable<Customer> {
        return this.httpClient.post<Customer>(`${URL_SERVER}/customer/v1/saveCustomer`, customer, {headers: this.headers});
    }

    public deleteCustomer(id: string): Observable<Customer> {
        return this.httpClient.delete<Customer>(`${URL_SERVER}/customer/v1/deleteCustomer/${id}`)
    }
}
