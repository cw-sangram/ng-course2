import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component";
import { AppRoutingModule } from "./app.routing";
import { ChildComponent } from "./child/child.component";
import { MasterComponent } from "./master/master.component";
import { AppStyleComponent } from './app-style/app-style.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
    MasterComponent,
    AppStyleComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
