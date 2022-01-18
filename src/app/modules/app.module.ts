import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app/app.component';
import { Transition, UIRouterModule } from '@uirouter/angular';
import { StateService } from '@uirouter/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { ConnectionFormComponent } from '../components/connection-form/connection-form.component';
import { CloseableDialogComponent } from '../components/closeable-dialog/closeable-dialog.component';
import { LobbyAsLeaderComponent } from '../components/lobby-as-leader/lobby-as-leader.component';
import { Ng2StateDeclaration } from '@uirouter/angular/interface';

const connectionFormState = {
  name: 'connectionForm',
  component: ConnectionFormComponent,
};

const lobbyAsLeaderState: Ng2StateDeclaration = {
  name: 'lobbyAsLeader',
  component: LobbyAsLeaderComponent,
  params: {
    numQuestionsOptions: null,
    defaultNumQuestionsIndex: null,
  },
  /*resolve: [
    {
      token: 'message',
      deps: [Transition],
      resolveFn: (trans: Transition) => {
        // TODO remove?
        console.log('In custom transition code...');
        console.log(trans.params());
        return trans.params();
      },
    },
  ],*/
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialExampleModule,
    UIRouterModule.forRoot({
      states: [connectionFormState, lobbyAsLeaderState],
      useHash: true,
    }),
  ],
  declarations: [
    AppComponent,
    CloseableDialogComponent,
    ConnectionFormComponent,
    LobbyAsLeaderComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(stateService: StateService) {
    stateService.go('connectionForm');
  }
}
