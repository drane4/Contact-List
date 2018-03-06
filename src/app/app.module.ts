import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {
    apiKey: "AIzaSyBnyjtSyfiIFcSO53rKeBWnkZGC_kQfJ18",
    authDomain: "contact-list-61e73.firebaseapp.com",
    databaseURL: "https://contact-list-61e73.firebaseio.com",
    projectId: "contact-list-61e73",
    storageBucket: "contact-list-61e73.appspot.com",
    messagingSenderId: "436566905470"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),  // Add this
    AngularFirestoreModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
