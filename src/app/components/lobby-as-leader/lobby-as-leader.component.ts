import { Component } from '@angular/core';
import { Transition } from '@uirouter/core';
import { LeaderDetailsMessage } from '../../model/inbound-messages';
import { SharedProgressSpinnerService } from '../../services/shared-data/shared-progress-spinner.service';
import { WebsocketService } from '../../services/websocket.service';
import { createStartGameMessage } from '../../utils/message-utils';

@Component({
  selector: 'app-lobby-as-leader',
  templateUrl: './lobby-as-leader.component.html',
  styleUrls: ['./lobby-as-leader.component.css'],
})
export class LobbyAsLeaderComponent {
  // Customization for the slider
  min: number;
  max: number;
  value: number;

  constructor(
    trans: Transition,
    private websocketService: WebsocketService,
    private sharedProgressSpinner: SharedProgressSpinnerService
  ) {
    let message: LeaderDetailsMessage = trans.params().message;

    /**
     * Due to limitations with the slider, we will not attempt to honor the server's request
     * for legal game lengths, other than to honor the min and max.
     */
    this.min = message.numQuestionsOptions[0];
    this.max =
      message.numQuestionsOptions[message.numQuestionsOptions.length - 1];
    this.value = message.numQuestionsOptions[message.defaultNumQuestionsIndex];
  }

  startGame() {
    this.sharedProgressSpinner.open();
    this.websocketService.send(createStartGameMessage(this.value));
  }
}
