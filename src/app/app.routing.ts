import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { MasterComponent } from "./master/master.component";
import { NgClassComponent, NgforComponent, NgSwitchComponent, ViewChildComponent,ContentChildComponent } from './Controls/index';
import { ObservableComponent, HttpComponent } from './observables/index';



const routes: Routes = [
     { path: 'hello', component: HelloComponent },
     { path: 'master', component: MasterComponent },
     { path: 'ngClass' , component: NgClassComponent},
     { path: 'ngFor' , component: NgforComponent},
     { path: 'ngSwitch' , component: NgSwitchComponent},
     { path: 'viewChild' , component: ViewChildComponent},
     { path: 'contentChild' , component: ContentChildComponent},
     { path: 'observable' , component: ObservableComponent},
     { path: 'http' , component: HttpComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }