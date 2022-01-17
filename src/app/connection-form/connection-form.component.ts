import { Component, OnInit } from '@angular/core';
import defaultConnectionSettings from '../../assets/default-connection-settings.json';

@Component({
  selector: 'app-connection-form',
  templateUrl: './connection-form.component.html',
  styleUrls: ['./connection-form.component.css'],
})
export class ConnectionFormComponent implements OnInit {
  name: string;
  protocol: string;
  host: string;
  port: number;
  path: string;

  ngOnInit() {
    this.protocol = defaultConnectionSettings.protocol;
    this.host = defaultConnectionSettings.host;
    this.port = defaultConnectionSettings.port;
    this.path = defaultConnectionSettings.path;
  }

  isButtonDisabled() {
    return !(this.name && this.protocol && this.host && this.port && this.path);
  }
}
