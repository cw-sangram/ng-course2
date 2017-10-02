import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from "./hello/hello.component";
import { MasterComponent } from "./master/master.component";


const routes: Routes = [
     { path: 'hello', component: HelloComponent },
     { path: 'master', component: MasterComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }