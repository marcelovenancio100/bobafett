import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerResolver } from './customer/customer.resolver';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

const routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'customer',
        component: CustomerComponent
      },
      {
        path: 'customer/new',
        component: CustomerFormComponent
      },
      {
        path: 'customer/edit/:id',
        component: CustomerFormComponent, 
        resolve: { customer: CustomerResolver }
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
