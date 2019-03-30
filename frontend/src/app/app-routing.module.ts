import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {HomeComponent} from "./home/home.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
  {path: 'clients/client-add', component: ClientAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
