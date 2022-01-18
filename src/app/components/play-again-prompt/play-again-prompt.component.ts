import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { createPlayAgainMessage } from '../../utils/message-utils';

@Component({
  selector: 'app-play-again-prompt',
  templateUrl: './play-again-prompt.component.html',
  styleUrls: ['./play-again-prompt.component.css'],
})
export class PlayAgainPromptComponent {
  constructor(private websocketService: WebsocketService) {}

  playAgain(withSamePlayers: boolean) {
    this.websocketService.send(createPlayAgainMessage(withSamePlayers));
  }
}
