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
  declarations: [AppComponent, CloseableDialogComponent, ConnectionFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(stateService: StateService) {
    stateService.go('connectionForm');
  }
}
