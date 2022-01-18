import { Component } from '@angular/core';
import { Transition } from '@uirouter/core';
import { QuestionDetailsMessage } from '../../model/inbound-messages';
import { SharedProgressSpinnerService } from '../../services/shared-data/shared-progress-spinner.service';
import { WebsocketService } from '../../services/websocket.service';
import { createChooseAnswerMessage } from '../../utils/message-utils';

@Component({
  selector: 'app-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.css'],
})
export class QuestionDetailsComponent {
  message: QuestionDetailsMessage;

  constructor(
    trans: Transition,
    private websocketService: WebsocketService,
    private sharedProgressSpinner: SharedProgressSpinnerService
  ) {
    this.message = trans.params().message;
  }

  submitAnswer(answerIndex: number) {
    this.sharedProgressSpinner.open();
    this.websocketService.send(createChooseAnswerMessage(answerIndex));
  }
}
