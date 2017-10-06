import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component";
import { AppRoutingModule } from "./app.routing";
import { ChildComponent } from "./child/child.component";
import { MasterComponent } from "./master/master.component";
import { AppStyleComponent } from './app-style/app-style.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { NgClassComponent,NgforComponent, ForExampleComponent, NgSwitchComponent } from './Controls/index';



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
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule,NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
