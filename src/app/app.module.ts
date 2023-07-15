import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NyaklancComponent } from './nyaklanc/nyaklanc.component';
import { SzallodaarakComponent } from './szallodaarak/szallodaarak.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { Enviroments } from './enviroments';

@NgModule({
  declarations: [
    AppComponent,
    NyaklancComponent,
    SzallodaarakComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(Enviroments.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
