import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class ControllerService {
  constructor(private websocketService: WebsocketService) {}

  connect(name: string, url: string) {
    this.websocketService.connect(url, {
      onOpen: () => {
        // TODO, set up listener(s) and send connection request
        console.log('In custom onOpen');
      },
      onClose: (closeEvent: CloseEvent) => {
        // TODO, tear down listeners and route back to login screen (and show error dialog)
        console.log('In custom onClose');
      },
      onError: (event: Event) => {
        console.log('In custom onError');
      },
      onConnectionError: (error: any) => {
        console.log('In custom onConnectionError');
      },
      onMessage: (messageEvent: any) => {
        console.log('In custom onMessage');
      },
    });
  }
}
