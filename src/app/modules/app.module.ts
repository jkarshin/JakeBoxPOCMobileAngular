import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../components/app/app.component';
import { UIRouterModule } from '@uirouter/angular';
import { StateService } from '@uirouter/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from './material.module';
import { ConnectionFormComponent } from '../components/connection-form/connection-form.component';
import { CloseableDialogComponent } from '../components/closeable-dialog/closeable-dialog.component';
import { LobbyAsLeaderComponent } from '../components/lobby-as-leader/lobby-as-leader.component';
import { WaitScreenComponent } from '../components/wait-screen/wait-screen.component';
import { QuestionDetailsComponent } from '../components/question-details/question-details.component';

const connectionFormState = {
  name: 'connectionForm',
  component: ConnectionFormComponent,
};

const lobbyAsLeaderState = {
  name: 'lobbyAsLeader',
  component: LobbyAsLeaderComponent,
  params: {
    message: { value: null },
  },
};

const waitScreenState = {
  name: 'waitScreen',
  component: WaitScreenComponent,
  params: {
    message: { value: null },
  },
};

const questionDetailsState = {
  name: 'questionDetails',
  component: QuestionDetailsComponent,
  params: {
    message: { value: null },
  },
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialExampleModule,
    UIRouterModule.forRoot({
      states: [
        connectionFormState,
        lobbyAsLeaderState,
        questionDetailsState,
        waitScreenState,
      ],
      useHash: true,
    }),
  ],
  declarations: [
    AppComponent,
    CloseableDialogComponent,
    ConnectionFormComponent,
    LobbyAsLeaderComponent,
    QuestionDetailsComponent,
    WaitScreenComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(stateService: StateService) {
    stateService.go('connectionForm');
    /**
     * Uncomment one of the below calls to start app in a different state.
     */
    // stateService.go('lobbyAsLeader', {
    //   message: {
    //     numQuestionsOptions: [5, 6, 15],
    //     defaultNumQuestionsIndex: 1,
    //   },
    // });

    // stateService.go('waitScreen', {
    //   message: {
    //     //waitText: 'Custom wait text',
    //   },
    // });

    // stateService.go('questionDetails', {
    //   message: {
    //     questionText: 'Name an answer to this question?',
    //     answerTexts: ['1', 'Some Text', 'FooBar123!@'],
    //   },
    // });
  }
}
