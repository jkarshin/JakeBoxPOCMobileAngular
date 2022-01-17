import { Injectable } from '@angular/core';
import { ConnectionSettings } from '../model/connection-settings';
import { WebSocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class ControllerService {
  constructor(private websocketService: WebSocketService) {}

  connect(name: string, url: string) {
    let openObserver = {
      next: () => {
        // TODO, set up listener(s) and send connection request
        console.log('In custom onOpen');
      },
    };
    let closeObserver = {
      next(closeEvent) {
        // TODO, tear down listeners and route back to login screen (and show error dialog)
        console.log('In custom onClose');
      },
    };
    this.websocketService.connect(url, openObserver, closeObserver);
  }
}
