import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { CheckComponent } from './check/check.component';
import { NewlandingComponent } from './newlanding/newlanding.component'
import { EventsPageComponent } from './events-page/events-page.component';
import { LoginComponent } from './login/login.component';
import { Question2Component } from './question2/question2.component';

const routes: Routes = [
  { path: "", redirectTo: "ques2", pathMatch: "full" },
  { path: "home", component: NewlandingComponent },
  { path: "events", component: EventsPageComponent },
  { path: "register", component: RegisterpageComponent },
  { path: "login", component: LoginComponent },
  { path: "ques2", component: Question2Component },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule {}
