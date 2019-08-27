import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import {
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatExpansionModule
} from '@angular/material';

import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { RequestPasswordComponent } from './request-password/request-password.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    NgxMaskModule.forRoot(options),
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterUserComponent,
    RequestPasswordComponent
  ],
  exports: [
    LoginComponent,
    LogoutComponent,
    RegisterUserComponent,
    RequestPasswordComponent
  ],
  providers: []
})
export class AuthenticationModule { }
