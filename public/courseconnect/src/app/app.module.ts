import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app/app.component";
import { AboutComponent } from './about/about.component';
import { ConsoleLoginComponent } from './console-login/console-login.component';
import { ConsoleSignupComponent } from './console-signup/console-signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ConsoleLoginComponent,
    ConsoleSignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
