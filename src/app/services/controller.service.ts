import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StateService } from '@uirouter/core';
import { CloseableDialogComponent } from '../components/closeable-dialog/closeable-dialog.component';
import { WebsocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class ControllerService {
  constructor(
    private websocketService: WebsocketService,
    private stateService: StateService,
    private dialog: MatDialog
  ) {}

  connect(name: string, url: string) {
    let that = this;

    this.websocketService.connect(url, {
      onOpen: () => {
        // TODO, set up listener(s) and send connection request
        console.log('In custom onOpen');
      },
      onClose: (closeEvent: CloseEvent) => {
        // TODO show info dialog with reason?
        this.stateService.go('connectionForm');
        that.dialog.open(CloseableDialogComponent);
      },
      onError: (event: Event) => {
        // No-op, because we are assuming that onClose() will also be triggered.
      },
      onConnectionError: (error: any) => {
        // TODO show info dialog with reason?
      },
      onMessage: (messageEvent: any) => {
        console.log('In custom onMessage');
        // TODO react to message
      },
    });
  }
}
