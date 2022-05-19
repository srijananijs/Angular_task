import { UserDetailsComponent } from './form/user-details/user-details.component';
import { FormComponent } from './form/form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'details',component:UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
