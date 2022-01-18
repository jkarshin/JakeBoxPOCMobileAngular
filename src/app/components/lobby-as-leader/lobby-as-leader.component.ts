import { Component } from '@angular/core';
import { Transition } from '@uirouter/core';
import { LeaderDetailsMessage } from '../../model/inbound-messages';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-lobby-as-leader',
  templateUrl: './lobby-as-leader.component.html',
  styleUrls: ['./lobby-as-leader.component.css'],
})
export class LobbyAsLeaderComponent {
  //message: LeaderDetailsMessage;

  // Customization for the slider
  min: number;
  max: number;
  value: number;

  constructor(trans: Transition, private websocketService: WebsocketService) {
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
    // TODO implement
  }
}
