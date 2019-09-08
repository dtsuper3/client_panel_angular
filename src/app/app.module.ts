import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
// AngularFire Imports
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabase } from "angularfire2/database";
import { AngularFireAuth } from "angularfire2/auth";
// Components Import
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
// Imports Services
import { ClientService } from "./services/client.service";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth.guard";
import { RegisterGuard } from "./guards/register.guard";
import { SettingsService } from "./services/settings.service";

export const firebaseConfig = {
  apiKey: "AIzaSyCvw5vpIT3vByQw1wsCXznMyw7HKg6HSw8",
  authDomain: "clientpaneldev-d7a5e.firebaseapp.com",
  databaseURL: "https://clientpaneldev-d7a5e.firebaseio.com",
  projectId: "clientpaneldev-d7a5e",
  storageBucket: "clientpaneldev-d7a5e.appspot.com",
  messagingSenderId: "1042069753785",
  appId: "1:1042069753785:web:b769134ad03b7ba4"
};

const appRoutes: Routes = [
  { path: "", component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [RegisterComponent]
  },
  {
    path: "add-client",
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "settings",
    component: SettingsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "client/:id",
    component: ClientDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "edit-client/:id",
    component: EditClientComponent,
    canActivate: [AuthGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ClientsComponent,
    ClientDetailsComponent,
    AddClientComponent,
    EditClientComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    AngularFireAuth,
    AngularFireDatabase,
    ClientService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
