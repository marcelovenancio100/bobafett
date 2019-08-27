import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthJWTService, AuthJWTResult } from 'authentication-jwt';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  submitted: boolean = false;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authJWTService: AuthJWTService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    this.submitted = true;
    let data = this.formLogin.value;

    this.authJWTService.authenticate(data).subscribe((authJWTResult: AuthJWTResult) => {
      this.submitted = false;

      if (authJWTResult.isSuccess()) {
        this.router.navigateByUrl('/pages');
      } else {
        this.toastrService.error('Usuário ou senha inválida!');
      }
    });
  }
}
