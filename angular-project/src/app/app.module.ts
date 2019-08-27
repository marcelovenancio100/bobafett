import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ToastrModule } from 'ngx-toastr';
import { NgxMaskModule, IConfig } from 'ngx-mask'

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr)

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { AuthJWTModule, TokenInterceptor } from 'authentication-jwt';
import { PagesModule } from './pages/pages.module';
import { ConfirmationDialogComponent } from './common/confirmation-dialog/confirmation-dialog.component';

import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule
} from '@angular/material';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    }),
    NgxMaskModule.forRoot(options),
    AppRoutingModule,
    AuthenticationModule,
    AuthJWTModule.forRoot({
      baseEndpoint: 'http://localhost:8080'
    }),
    PagesModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    [{
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }]
  ],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
