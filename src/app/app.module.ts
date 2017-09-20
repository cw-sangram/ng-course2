import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from "./hello/hello.component";
import { AppRoutingModule } from "./app.routing";
import { ChildComponent } from "./child/child.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
