import { Directive, OnInit, OnDestroy, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { PermissionsService } from './permissions.service';

@Directive({
  selector: '[canAccess]'
})
export class CanAccessDirective implements OnInit, OnDestroy {

  @Input('canAccess') canAccess: string | string[];
  private permission$: Subscription;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef,
              private permissionsService: PermissionsService) {
  }

  ngOnInit(): void {
    this.applyPermission();
  }

  private applyPermission(): void {
    this.permission$ = this.permissionsService
      .checkAuthorization(this.canAccess)
      .subscribe(authorized => {
        if (authorized) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      });
  }

  ngOnDestroy(): void {
    this.permission$.unsubscribe();
  }
}
