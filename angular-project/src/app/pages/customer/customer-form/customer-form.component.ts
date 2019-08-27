import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  formCustomer: FormGroup;
  subscription: Subscription;
  customer: Customer;
  maskNI: string = '000.000.000-00';

  constructor(private customerService: CustomerService,
              private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadForm();
    this.loadData();
  }

  private loadForm() {
    this.formCustomer = this.formBuilder.group({
      id: [null],
      codigo: [null, [Validators.required, Validators.maxLength(10)]],
      nome: [null, [Validators.required, Validators.maxLength(100)]],
      ti: [1, [Validators.required]],
      ni: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.maxLength(100)]],
      fone: [null, [Validators.required, Validators.maxLength(25)]],
      endereco: [null, [Validators.maxLength(100)]],
      numero: [null],
      bairro: [null, [Validators.maxLength(50)]],
      municipio: [null, [Validators.maxLength(50)]],
      uf: [null, [Validators.maxLength(2)]],
      datacad: [null],
      score: [null]
    });
  }

  private loadData() {
    this.subscription = this.route.params.subscribe((params: any) => {
      let id = params['id'];
      if (id != null) {
        this.subscription = this.route.data.subscribe((data) => this.customer = data.customer);
        if (this.customer != null) {
          this.formCustomer.setValue({
            id: this.customer.id,
            codigo: this.customer.codigo,
            nome: this.customer.nome,
            ti: this.customer.ti,
            ni: this.customer.ni,
            email: this.customer.email,
            fone: this.customer.fone,
            endereco: this.customer.endereco,
            numero: this.customer.numero,
            bairro: this.customer.bairro,
            municipio: this.customer.municipio,
            uf: this.customer.uf,
            datacad: this.customer.datacad,
            score: this.customer.score
          });
        }
      }
    });
  }

  submitForm() {
    this.customerService.saveCustomer(this.formCustomer.value).subscribe(() => {
      this.router.navigate(['/customer']);
      this.toastrService.success('Cliente salvo com sucesso!');
    }, error => {
      this.router.navigate(['/error'], { queryParams: { error: error.error.message } });
    });
  }

  toBack() {
    this.router.navigateByUrl('customer');
  }

  changeMask(ti) {
    this.maskNI = ti == 0 ? '00.000.000/0000-00' : '000.000.000-00';
  }
}
