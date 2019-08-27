import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Promise } from "q";

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Injectable()
export class CustomerResolver implements Resolve<Customer> {

    constructor(private customerService: CustomerService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        let id = route.params['id'];
        return this.customerService.getCustomer(id);
    }
}
