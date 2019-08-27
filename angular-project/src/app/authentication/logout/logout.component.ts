import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthJWTService, AuthJWTResult } from 'authentication-jwt';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authJWTService: AuthJWTService,
              private router: Router) { }

  ngOnInit() {
    this.authJWTService.logout().subscribe((authJWTResult: AuthJWTResult) => {
      setTimeout(() => {
        return this.router.navigateByUrl('/');
      }, 0);
    });
  }
}
