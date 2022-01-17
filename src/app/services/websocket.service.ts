import { Injectable } from '@angular/core';

export interface Handlers {
  onOpen: () => any;
  onClose: (closeEvent: CloseEvent) => any;
  onError: (event: Event) => any;
  onConnectionError: (error: any) => any;
  onMessage: (messageEvent: any) => any;
}

@Injectable({ providedIn: 'root' })
export class WebsocketService {
  private websocket: WebSocket;

  constructor() {}

  connect(url: string, handlers: Handlers) {
    try {
      console.log(`Attempting to connect to: ${url}`);
      this.websocket = new WebSocket(url);
      this.websocket.onopen = () => {
        console.log('Websocket was opened successfully.');
        handlers.onOpen();
      };
      this.websocket.onclose = (event) => {
        console.log(`Websocket was closed: ${event}`);
        handlers.onClose(event);
      };
      this.websocket.onerror = (event) => {
        console.log(`Websocket received an error: ${event}`);
        handlers.onError(event);
      };
      this.websocket.onmessage = (message) => {
        console.log(`Websocket received message: ${message.data}`);
        handlers.onMessage(message.data);
      };
    } catch (error) {
      console.log(
        `Encountered error while attempting to open Websocket: ${error}`
      );
      handlers.onConnectionError(error);
    }
  }
}
