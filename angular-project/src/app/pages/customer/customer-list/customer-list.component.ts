import { Component, OnInit, ViewChild, Input, OnChanges, AfterViewInit } from '@angular/core';
import { MatSort, MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';
import { merge } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CustomerDto } from '../customer.dto';
import { CustomerService } from '../customer.service';
import { CustomerDataSource } from 'src/app/model/customer-data-source';
import { ConfirmationDialogService } from 'src/app/common/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit, OnChanges, AfterViewInit {
  dataSource: CustomerDataSource;
  displayedColumns: string[] = ['codigo', 'nome', 'email', 'fone', 'datacad', 'score', 'acoes'];

  customersCount: number;
  @Input() customerDto: CustomerDto;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private customerService: CustomerService,
              private confirmationDialogService: ConfirmationDialogService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() { }

  ngOnChanges() {
    this.loadDataSource();
  }

  loadDataSource() {
    this.resetCustomersPage();
    this.customerService.getCustomersCount(this.customerDto).subscribe(data => this.customersCount = data);
    this.dataSource = new CustomerDataSource(this.customerService);
    this.dataSource.loadCustomers(this.customerDto);
  }

  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadCustomersPage())
      ).subscribe();
  }

  loadCustomersPage() {
    this.customerDto.sortDirection = this.sort.direction;
    this.customerDto.pageIndex = this.paginator.pageIndex;
    this.customerDto.pageSize = this.paginator.pageSize;
    this.dataSource.loadCustomers(this.customerDto);
  }

  resetCustomersPage() {
    this.sort.direction = 'asc';
    this.paginator.pageIndex = 0;
    this.paginator.pageSize = 5;
  }

  onRowClicked(row) {
    console.log('Row clicked: ', row);
  }

  editCustomer(id) {
    this.router.navigate(['/customer/edit', id]);
  }

  deleteCustomer(id) {
    this.confirmationDialogService.openConfirmDialog('Confirmação de exclusão', 'Tem certeza que deseja excluir o registro?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.customerService.deleteCustomer(id).subscribe(() => {
            this.toastrService.success('Registro excluído com sucesso!');
            this.loadDataSource();
          }, error => {
            this.router.navigate(['/error'], { queryParams: { error: error.error.message } });
          });
        }
      });
  }
}
