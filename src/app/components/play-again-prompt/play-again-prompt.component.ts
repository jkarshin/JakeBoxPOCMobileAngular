import { Component } from '@angular/core';
import { SharedProgressSpinnerService } from '../../services/shared-data/shared-progress-spinner.service';
import { WebsocketService } from '../../services/websocket.service';
import { createPlayAgainMessage } from '../../utils/message-utils';

@Component({
  selector: 'app-play-again-prompt',
  templateUrl: './play-again-prompt.component.html',
  styleUrls: ['./play-again-prompt.component.css'],
})
export class PlayAgainPromptComponent {
  constructor(
    private websocketService: WebsocketService,
    private sharedProgressSpinner: SharedProgressSpinnerService
  ) {}

  playAgain(withSamePlayers: boolean) {
    this.sharedProgressSpinner.open();
    this.websocketService.send(createPlayAgainMessage(withSamePlayers));
  }
}
