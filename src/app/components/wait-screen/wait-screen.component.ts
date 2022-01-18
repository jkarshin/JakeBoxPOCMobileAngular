import { Component } from '@angular/core';
import { Transition } from '@uirouter/core';
import { PleaseWaitMessage } from '../../model/inbound-messages';

@Component({
  selector: 'app-wait-screen',
  templateUrl: './wait-screen.component.html',
  styleUrls: ['./wait-screen.component.css'],
})
export class WaitScreenComponent {
  message: PleaseWaitMessage;

  constructor(trans: Transition) {
    this.message =
      trans.params().message.waitText || 'The action is on the main screen!';
  }
}
