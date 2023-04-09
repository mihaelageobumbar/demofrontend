import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {AppRoutingModule} from "./app-routings/app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
