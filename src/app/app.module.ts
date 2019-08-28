import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ViewComponent } from './pages/view/view.component';

 const config = {
  apiKey: "AIzaSyDe7Glr4HAVGmZT1NMcW0DOJIrHJFyGYNY",
  authDomain: "presentation-87078.firebaseapp.com",
  databaseURL: "https://presentation-87078.firebaseio.com",
  projectId: "presentation-87078",
  storageBucket: "presentation-87078.appspot.com",
  messagingSenderId: "1023703306091",
  appId: "1:1023703306091:web:a8ced1333246bc75"
};


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
