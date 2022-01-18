import { Component, Input, OnInit } from '@angular/core';
import { Transition } from '@uirouter/core';
import { LeaderDetailsMessage } from '../../model/inbound-messages';

@Component({
  selector: 'app-lobby-as-leader',
  templateUrl: './lobby-as-leader.component.html',
  styleUrls: ['./lobby-as-leader.component.css'],
})
export class LobbyAsLeaderComponent implements OnInit {
  message: LeaderDetailsMessage;
  // testInput: string;

  constructor(trans: Transition) {
    this.message = trans.params().message;
  }

  ngOnInit(): void {
    console.log('OnInit:');
    console.log(this.message);
  }
}
