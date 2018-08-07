import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { CheckpasswordDirective } from './checkpassword.directive';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import {AuthserviceService} from './authservice.service'

import {AngularFireDatabaseModule} from 'angularfire2/database';

// for AngularFireDatabase

import { AngularFireDatabase} from 'angularfire2/database';
// for AngularFireAuth

import { AngularFireAuth } from 'angularfire2/auth';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentregComponent,
    CheckpasswordDirective,
    StudentloginComponent,
    
    
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule,
    AngularFireDatabaseModule
  

  ],
  providers: [AuthserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
