import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-password',
  templateUrl: './request-password.component.html',
  styleUrls: ['./request-password.component.scss']
})
export class RequestPasswordComponent implements OnInit {
  formRequest: FormGroup;
  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private location: Location) { }

  ngOnInit() {
    this.loadForm();
  }

  private loadForm() {
    this.formRequest = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  requestPassword() {
    this.submitted = true;
    let data = this.formRequest.value;

    //TODO
  }

  toBack() {
    this.location.back();
  }
}
