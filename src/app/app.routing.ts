import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { MasterComponent } from "./master/master.component";
import { NgClassComponent, NgforComponent, NgSwitchComponent } from './Controls/index';


const routes: Routes = [
     { path: 'hello', component: HelloComponent },
     { path: 'master', component: MasterComponent },
     { path: 'ngClass' , component: NgClassComponent},
     { path: 'ngFor' , component: NgforComponent},
     { path: 'ngSwitch' , component: NgSwitchComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }