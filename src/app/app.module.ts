import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UIRouterModule } from '@uirouter/angular';
import { StateService } from '@uirouter/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { ConnectionFormComponent } from './connection-form/connection-form.component';

const connectionFormState = {
  name: 'connectionForm',
  component: ConnectionFormComponent,
};

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MaterialExampleModule,
    UIRouterModule.forRoot({
      states: [connectionFormState],
      useHash: true,
    }),
  ],
  declarations: [AppComponent, ConnectionFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(stateService: StateService) {
    stateService.go('connectionForm');
  }
}
