import { NgModule } from '@angular/core';
import {RegisterComponent} from "../register/register.component";
import {UserComponent} from "../user/user.component";
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "../admin/admin.component";
import {LoginComponent} from "../login/login.component";

const routes: Routes = [
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [RegisterComponent, UserComponent]
