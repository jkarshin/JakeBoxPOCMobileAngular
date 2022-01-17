import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { CloseableDialogComponent } from '../components/closeable-dialog/closeable-dialog.component';
import { createClientConnectionRequestString } from '../utils/message-utils';
import { WebsocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class ControllerService {
  constructor(
    private websocketService: WebsocketService,
    private stateService: StateService,
    private dialog: MatDialog
  ) {}

  connect(name: string, url: string) {
    // TODO show loading dialog

    this.websocketService.connect(url, {
      onOpen: () => {
        this.websocketService.send(createClientConnectionRequestString(name));
      },
      onClose: (closeEvent: CloseEvent) => {
        this.stateService.go('connectionForm');
        this.showDialog(closeEvent.reason);
      },
      onError: (event: Event) => {
        // No-op, because we are assuming that onClose() will also be triggered.
      },
      onConnectionError: (error: any) => {
        this.showDialog(null);
      },
      onMessage: (messageEvent: any) => {
        console.log('In custom onMessage');
        // TODO react to message
      },
    });
  }

  private showDialog(reason: string) {
    this.dialog.open(CloseableDialogComponent, {
      data: {
        title: reason ? 'Connection Lost' : 'Connection Error',
        message: reason
          ? reason
          : 'Failed to connect or a close reason was not provided.',
      },
    });
  }
}
