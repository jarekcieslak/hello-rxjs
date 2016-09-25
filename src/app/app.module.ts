import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';

import { MdButtonModule } from '@angular2-material/button';

import { AppComponent } from './app.component';
import { CircleComponent, LineComponent } from './shared';

export const firebaseConfig = {
  apiKey: 'PUT_API_KEY_HERE',
  authDomain: 'PUT_DOMAIN_HERE',
  databaseURL: 'PUT_URL_HERE',
  storageBucket: ''
};

@NgModule({
  declarations: [
    AppComponent,
    CircleComponent,
    LineComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    HttpModule,
    MdButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
