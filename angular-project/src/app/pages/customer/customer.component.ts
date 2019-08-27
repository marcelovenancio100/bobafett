import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerDto } from './customer.dto';

@Component({
  selector: 'customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  showList: boolean = false;
  customerDto: CustomerDto = new CustomerDto();

  constructor(private router: Router) { }

  ngOnInit() { }

  loadList(form) {
    this.customerDto = new CustomerDto(form.codigo, form.nome, form.ni);
    this.showList = true;
  }

  cleanFilter() {
    this.customerDto = new CustomerDto();
  }

  addCustomer() {
    this.router.navigateByUrl('customer/new');
  }

  toBack() {
    this.router.navigateByUrl('pages');
  }
}
