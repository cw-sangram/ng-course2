import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component";
import { AppRoutingModule } from "./app.routing";
import { ChildComponent } from "./child/child.component";
import { MasterComponent } from "./master/master.component";
import { AppStyleComponent } from './app-style/app-style.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgClassComponent,NgforComponent,
   ForExampleComponent, NgSwitchComponent,
   AlertComponent, ViewChildComponent, ContentChildComponent } from './Controls/index';
import { ObservableComponent, HttpComponent } from './observables/index';





@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    MasterComponent,
    AppStyleComponent,
    NgClassComponent,
    NgforComponent,
    ForExampleComponent,
    NgSwitchComponent,
    AlertComponent,
    ViewChildComponent,
    ContentChildComponent,
    ObservableComponent,
    HttpComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,NgbModule.forRoot(),HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
