import { Component, Input } from '@angular/core';
import { LeaderDetailsMessage } from '../../model/inbound-messages';

@Component({
  selector: 'app-lobby-as-leader',
  templateUrl: './lobby-as-leader.component.html',
  styleUrls: ['./lobby-as-leader.component.css'],
})
export class LobbyAsLeaderComponent {
  @Input() message: LeaderDetailsMessage;

  constructor() {}
}
