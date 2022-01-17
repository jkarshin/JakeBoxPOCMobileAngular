import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-closeable-dialog',
  templateUrl: './closeable-dialog.component.html',
  styleUrls: ['./closeable-dialog.component.css'],
})
export class CloseableDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<CloseableDialogComponent>
  ) {
    dialogRef.disableClose = true;
  }
}
