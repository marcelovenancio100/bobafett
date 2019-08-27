import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {
  formRegister: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm() {
    this.formRegister = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      senhaConf: ['', Validators.required]
    });
  }

  register() {
    this.submitted = true;
    let data = this.formRegister.value;

    //TODO
  }

  toBack() {
    this.location.back();
  }
}
