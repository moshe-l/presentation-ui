import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { ViewComponent } from './pages/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { OrHahaimComponent } from './pages/or-hahaim/or-hahaim.component';
import { ExpensesSettingComponent } from './pages/expenses/expenses-setting/expenses-setting.component';
import { ExpensesViewComponent } from './pages/expenses/expenses-view/expenses-view.component';
var config = {
    apiKey: "AIzaSyDe7Glr4HAVGmZT1NMcW0DOJIrHJFyGYNY",
    authDomain: "presentation-87078.firebaseapp.com",
    databaseURL: "https://presentation-87078.firebaseio.com",
    projectId: "presentation-87078",
    storageBucket: "presentation-87078.appspot.com",
    messagingSenderId: "1023703306091",
    appId: "1:1023703306091:web:a8ced1333246bc75"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                ViewComponent,
                OrHahaimComponent,
                ExpensesSettingComponent,
                ExpensesViewComponent
            ],
            imports: [
                BrowserModule,
                FormsModule,
                HttpClientModule,
                AppRoutingModule,
                AngularFireModule.initializeApp(config),
                AngularFirestoreModule,
                AngularFireAuthModule,
                AngularFireStorageModule // storage
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map