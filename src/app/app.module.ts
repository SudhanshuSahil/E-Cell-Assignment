import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
import { PaginationModule } from "ngx-bootstrap/pagination";
import { AlertModule } from "ngx-bootstrap/alert";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
import { ModalModule } from "ngx-bootstrap/modal";

import { PagesModule } from "./pages/pages.module";

import { IndexComponent } from "./pages/index/index.component";
import { ProfilepageComponent } from "./pages/examples/profilepage/profilepage.component";
import { RegisterpageComponent } from "./pages/examples/registerpage/registerpage.component";
import { LandingpageComponent } from "./pages/examples/landingpage/landingpage.component";
import { CheckComponent } from './check/check.component';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NewlandingComponent } from './newlanding/newlanding.component';
import { EventsPageComponent } from './events-page/events-page.component';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Question2Component } from './question2/question2.component';

const config = {
  apiKey: "AIzaSyBw10yUAfsUlQbcfMNNnYwBjm5b3t1gqeE",
  authDomain: "ecell-assignment.firebaseapp.com",
  databaseURL: "https://ecell-assignment.firebaseio.com",
  projectId: "ecell-assignment",
  storageBucket: "ecell-assignment.appspot.com",
  messagingSenderId: "120082959761",
  appId: "1:120082959761:web:5fe147398dd48baa27de30"
}

@NgModule({
  declarations: [
    AppComponent,
    CheckComponent,
    NewlandingComponent,
    EventsPageComponent,
    LoginComponent,
    Question2Component,
    // IndexComponent,
    // ProfilepageComponent,
    // RegisterpageComponent,
    // LandingpageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // BsDropdownModule.forRoot(),
    // ProgressbarModule.forRoot(),
    // TooltipModule.forRoot(),
    // CollapseModule.forRoot(),
    // TabsModule.forRoot(),
    PagesModule
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // CarouselModule.forRoot(),
    // ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
