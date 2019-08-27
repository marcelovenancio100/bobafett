import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { CollectionViewer } from '@angular/cdk/collections';

import { Customer } from '../pages/customer/customer';
import { CustomerDto } from '../pages/customer/customer.dto';
import { CustomerService } from '../pages/customer/customer.service';

export class CustomerDataSource implements DataSource<Customer> {
    private customerSubject = new BehaviorSubject<Customer[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);
    public loading$ = this.loadingSubject.asObservable();

    constructor(private customerService: CustomerService) { }

    connect(collectionViewer: CollectionViewer): Observable<Customer[]> {
        return this.customerSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.customerSubject.complete();
        this.loadingSubject.complete();
    }

    loadCustomers(customerDto: CustomerDto) {
        this.loadingSubject.next(true);

        if(!customerDto.pageIndex) customerDto.pageIndex = 0;
        if(!customerDto.pageSize) customerDto.pageSize = 5;
        if(!customerDto.sortDirection) customerDto.sortDirection = 'asc';

        this.customerService.getCustomers(customerDto).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        ).subscribe(customers => this.customerSubject.next(customers));
    }
}