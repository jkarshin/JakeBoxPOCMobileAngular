import { Component, OnInit } from '@angular/core';
import defaultConnectionSettings from '../../../assets/default-connection-settings.json';
import { ConnectionSettings } from '../../model/connection-settings';
import { ControllerService } from '../../services/controller.service';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css'],
})
export class ConnectionFormComponent implements OnInit {
  // TODO: Consider making field values persistent
  name: string;
  connectionSettings: ConnectionSettings = {};

  constructor(private controllerService: ControllerService) {}

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
    let url = `${this.connectionSettings.protocol}://${this.connectionSettings.host}:${this.connectionSettings.port}/${this.connectionSettings.path}`;
    console.log(`Derived url: ${url}`);
    this.controllerService.connect(this.name, url);
  }
}
