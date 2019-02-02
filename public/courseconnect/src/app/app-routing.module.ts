import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ConsoleLoginComponent} from "./console-login/console-login.component";
import {ConsoleSignupComponent} from "./console-signup/console-signup.component";
import {ConsoleHomeComponent} from "./console-home/console-home.component";
import {ConsoleVerifyComponent} from "./console-verify/console-verify.component";
import {ConsoleForgotComponent} from "./console-forgot/console-forgot.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'console-login', component: ConsoleLoginComponent},
  {path: 'console-signup', component: ConsoleSignupComponent},
  {path: 'console-home', component: ConsoleHomeComponent},
  {path: 'console-verify', component: ConsoleVerifyComponent},
  {path: 'console-forgot', component: ConsoleForgotComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
