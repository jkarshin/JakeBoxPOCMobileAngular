import { Component, OnInit } from '@angular/core';
import defaultConnectionSettings from '../../../assets/default-connection-settings.json';
import { ConnectionSettings } from '../../model/connection-settings';
import { ControllerService } from '../../services/controller.service';
import { SharedProgressSpinnerService } from '../../services/shared-data/shared-progress-spinner.service';

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
    private sharedProgressSpinner: SharedProgressSpinnerService
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
    this.sharedProgressSpinner.open();

    let url = `${this.connectionSettings.protocol}://${this.connectionSettings.host}:${this.connectionSettings.port}/${this.connectionSettings.path}`;
    console.log(`Derived url: ${url}`);
    this.controllerService.connect(this.name, url);
  }
}
