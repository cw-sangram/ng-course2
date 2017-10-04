import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { MasterComponent } from "./master/master.component";
import { NgClassComponent } from "./Controls/ngclass.component";
import { NgforComponent } from "./Controls/ngfor.component";


const routes: Routes = [
     { path: 'hello', component: HelloComponent },
     { path: 'master', component: MasterComponent },
     { path: 'ngclass' , component: NgClassComponent},
     { path: 'ngFor' , component: NgforComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }