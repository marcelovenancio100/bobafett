import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ConfirmationDialogComponent } from './confirmation-dialog.component';

@Injectable({
    providedIn: 'root'
})
export class ConfirmationDialogService {

    constructor(private dialog: MatDialog) { }

    openConfirmDialog(title: string, message: string) {
        return this.dialog.open(ConfirmationDialogComponent, {
            width: '400px',
            panelClass: 'confirm-dialog-container',
            position: { top: '100px'},
            data: {
                title: title,
                message: message
            }
        });
    }
}