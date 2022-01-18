import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import defaultConnectionSettings from '../../../assets/default-connection-settings.json';
import { ConnectionSettings } from '../../model/connection-settings';
import { ControllerService } from '../../services/controller.service';
import { ProgressSpinnerDialogComponent } from '../progress-spinner-dialog/progress-spinner-dialog.component';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css'],
})
export class ConnectionFormComponent implements OnInit {
  // TODO: Consider making field values persistent
  name: string;
  connectionSettings: ConnectionSettings = {};

  constructor(
    private controllerService: ControllerService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.connectionSettings = defaultConnectionSettings;
  }

  isButtonDisabled() {
    return !(
      this.name &&
      this.connectionSettings.protocol &&
      this.connectionSettings.host &&
      this.connectionSettings.port &&
      this.connectionSettings.path
    );
  }

  connect() {
    // Show a progress spinner
    let dialogRef: MatDialogRef<ProgressSpinnerDialogComponent> =
      this.dialog.open(ProgressSpinnerDialogComponent, {
        panelClass: 'transparent',
        disableClose: true,
      });

    let url = `${this.connectionSettings.protocol}://${this.connectionSettings.host}:${this.connectionSettings.port}/${this.connectionSettings.path}`;
    console.log(`Derived url: ${url}`);
    this.controllerService.connect(this.name, url);
  }
}
