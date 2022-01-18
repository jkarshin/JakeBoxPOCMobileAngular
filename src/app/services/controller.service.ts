import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { CloseableDialogComponent } from '../components/closeable-dialog/closeable-dialog.component';
import { ProgressSpinnerDialogComponent } from '../components/progress-spinner-dialog/progress-spinner-dialog.component';
import {
  createClientConnectionRequestString,
  deserializeMessage,
} from '../utils/message-utils';
import { MessageHandlerService } from './message-handler.service';
import { SharedProgressSpinnerService } from './shared-data/shared-progress-spinner.service';
import { WebsocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class ControllerService {
  constructor(
    private websocketService: WebsocketService,
    private messageHandlerService: MessageHandlerService,
    private stateService: StateService,
    private sharedProgressSpinner: SharedProgressSpinnerService,
    private dialog: MatDialog
  ) {}

  connect(name: string, url: string) {
    this.websocketService.connect(url, {
      onOpen: () => {
        this.websocketService.send(createClientConnectionRequestString(name));
      },
      onClose: (closeEvent: CloseEvent) => {
        this.stateService.go('connectionForm');
        this.sharedProgressSpinner.close();
        this.showDialog(closeEvent.reason);
      },
      onError: (event: Event) => {
        // No-op, because we are assuming that onClose() will also be triggered.
      },
      onConnectionError: (error: any) => {
        this.sharedProgressSpinner.close();
        this.showDialog(null);
      },
      onMessage: (message: string) => {
        this.messageHandlerService.handle(deserializeMessage(message));
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
