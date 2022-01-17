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
        console.log('Websocket was closed.');
        console.log(event);
        handlers.onClose(event);
      };
      this.websocket.onerror = (event) => {
        console.error('Websocket received an error');
        console.error(event);
        handlers.onError(event);
      };
      this.websocket.onmessage = (message) => {
        console.log('Websocket received message');
        console.log(message.data);
        handlers.onMessage(message.data);
      };
    } catch (error) {
      console.error(
        `Encountered error while attempting to open Websocket: ${error}`
      );
      handlers.onConnectionError(error);
    }
  }

  send(message: string) {
    if (!this.websocket) {
      console.warn('Attempted to send message but websocket is not open.');
      console.warn(message);
      return;
    }

    console.log('Sending message...');
    console.log(message);
    this.websocket.send(message);
  }
}
