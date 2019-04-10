import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {HomeComponent} from "./home/home.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard.service";
import {ClientEditComponent} from "./clients/client-edit/client-edit.component";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerAddComponent} from "./workers/worker-add/worker-add.component";
import {WorkerEditComponent} from "./workers/worker-edit/worker-edit.component";
import {TicketsDictionaryComponent} from "./tickets-dictionary/tickets-dictionary.component";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
  {path: 'clients/add', component: ClientAddComponent, canActivate: [AuthGuard]},
  {path: 'clients/edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
  {path: 'workers', component: WorkersComponent, canActivate: [AuthGuard]},
  {path: 'workers/add', component: WorkerAddComponent, canActivate: [AuthGuard]},
  {path: 'workers/edit/:id', component: WorkerEditComponent, canActivate: [AuthGuard]},
  {path: 'ticketsDictionary', component: TicketsDictionaryComponent, canActivate: [AuthGuard]},
  {path: 'ticketsDictionary/add', component: WorkerAddComponent, canActivate: [AuthGuard]},
  {path: 'ticketsDictionary/edit/:id', component: WorkerEditComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
