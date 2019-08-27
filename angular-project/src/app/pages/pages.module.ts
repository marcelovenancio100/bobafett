import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaskModule, IConfig } from 'ngx-mask'
import { PhonePipe } from '../pipes/phone.pipe';
import { CanAccessDirective } from '../authorization/can-access.directive';
import { PermissionsService } from '../authorization/permissions.service';

import { MenuModule } from 'vertical-menu';

import { PagesRoutingModule } from './pages.routing.module';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerFormComponent } from './customer/customer-form/customer-form.component';
import { CustomerService } from './customer/customer.service';
import { CustomerResolver } from './customer/customer.resolver';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatPaginatorModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
  MatProgressSpinnerModule,
  MatSortModule,
  MatIconModule
} from '@angular/material';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(options),
    PagesRoutingModule,
    MenuModule.forRoot({
      appName: 'Angular Project',
      uriLogo: '/assets/img/angular-logo.svg',
      uriLogout: '/logout'
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatIconModule
  ],
  declarations: [
    PhonePipe,
    PagesComponent,
    HomeComponent,
    DashboardComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerFormComponent,
    ProductComponent,
    OrderComponent,
    CanAccessDirective
  ],
  exports: [
    CanAccessDirective
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    CustomerService,
    CustomerResolver,
    PermissionsService
  ]
})
export class PagesModule { }
