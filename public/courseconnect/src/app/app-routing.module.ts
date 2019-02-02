import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ConsoleLoginComponent} from "./console-login/console-login.component";
import {ConsoleSignupComponent} from "./console-signup/console-signup.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'console-login', component: ConsoleLoginComponent},
  {path: 'console-signup', component: ConsoleSignupComponent},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
