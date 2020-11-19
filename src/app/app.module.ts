import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { ChangeComponent } from './change/change.component';
import { environment } from './environment';
import { AngularFireModule } from '@angular/fire';
import { CaleComponent } from './cale/cale.component';
import { FirebaseService } from './firebase.service';
import { TableComponent } from './table/table.component';
import { ShowDataComponent } from './show-data/show-data.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';




@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([
      { path: "", component:ChangeComponent  }]),
      ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebaseConfig),MatButtonToggleModule],
  declarations: [ AppComponent, HelloComponent, HomeComponent, ChangeComponent, CaleComponent, TableComponent,ShowDataComponent],
  bootstrap:    [ AppComponent ],
  providers: [FirebaseService]
})
export class AppModule { }