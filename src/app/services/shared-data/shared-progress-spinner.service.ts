import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressSpinnerDialogComponent } from '../../components/progress-spinner-dialog/progress-spinner-dialog.component';

@Injectable({ providedIn: 'root' })
export class SharedProgressSpinnerService {
  private dialogRef?: MatDialogRef<ProgressSpinnerDialogComponent>;

  constructor(private dialog: MatDialog) {}

  open() {
    close();
    this.dialogRef = this.dialog.open(ProgressSpinnerDialogComponent, {
      panelClass: 'transparent',
      disableClose: true,
    });
  }

  close() {
    this.dialogRef?.close();
    this.dialogRef = undefined;
  }
}
