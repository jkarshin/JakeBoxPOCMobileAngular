import { Injectable } from '@angular/core';
import { StateService } from '@uirouter/core';
import {
  InboundMessage,
  LeaderDetailsMessage,
  PingMessage,
  PlayAgainPromptMessage,
  PleaseWaitMessage,
  QuestionDetailsMessage,
} from '../model/inbound-messages';
import { createPongMessageString } from '../utils/message-utils';
import { SharedProgressSpinnerService } from './shared-data/shared-progress-spinner.service';
import { WebsocketService } from './websocket.service';

@Injectable({ providedIn: 'root' })
export class MessageHandlerService {
  private handlerMap = new Map<string, (message: InboundMessage) => any>();

  constructor(
    private websocketService: WebsocketService,
    private stateService: StateService,
    private sharedProgressSpinner: SharedProgressSpinnerService
  ) {
    this.handlerMap.set(PingMessage.TYPE, (message: InboundMessage) =>
      this.handlePing(message as PingMessage)
    );
    this.handlerMap.set(LeaderDetailsMessage.TYPE, (message: InboundMessage) =>
      this.handleLeaderDetails(message as LeaderDetailsMessage)
    );
    this.handlerMap.set(PleaseWaitMessage.TYPE, (message: InboundMessage) =>
      this.handlePleaseWait(message as PleaseWaitMessage)
    );
    this.handlerMap.set(
      QuestionDetailsMessage.TYPE,
      (message: InboundMessage) =>
        this.handleQuestionDetails(message as QuestionDetailsMessage)
    );
    this.handlerMap.set(
      PlayAgainPromptMessage.TYPE,
      (message: InboundMessage) =>
        this.handlePlayAgainPrompt(message as PlayAgainPromptMessage)
    );
  }

  handle(message: InboundMessage) {
    let handler = this.handlerMap.get(message.type);
    if (!handler) {
      console.error('Received unexpected InboundMessage');
      console.error(message);
      return;
    }

    handler(message);

    // TODO Technically, this should be called wheneve the UI Router state changes (not necessarily true for child states)
    if (message.type != PingMessage.TYPE) {
      this.sharedProgressSpinner.close();
    }
  }

  handlePing(message: PingMessage) {
    console.log('Processing PingMessage. Sending PongMessage...');
    this.websocketService.send(createPongMessageString());
  }

  handleLeaderDetails(message: LeaderDetailsMessage) {
    this.stateService.go('lobbyAsLeader', { message: message });
  }

  handlePleaseWait(message: PleaseWaitMessage) {
    this.stateService.go('waitScreen', { message: message });
  }

  handleQuestionDetails(message: QuestionDetailsMessage) {
    this.stateService.go('questionDetails', { message: message });
  }

  handlePlayAgainPrompt(message: PlayAgainPromptMessage) {
    this.stateService.go('playAgainPrompt');
  }
}
