import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConnectionFormComponent } from '../connection-form/connection-form.component';
import { UIRouterModule } from '@uirouter/angular';

const connectionFormState = {
  name: 'connectionForm',
  component: ConnectionFormComponent,
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    UIRouterModule.forRoot({
      states: [connectionFormState],
      useHash: true,
    }),
  ],
  declarations: [AppComponent, ConnectionFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
