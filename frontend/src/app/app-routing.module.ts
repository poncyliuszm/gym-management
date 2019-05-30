import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ClientsComponent} from "./clients/clients.component";
import {HomeComponent} from "./home/home.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard.service";
import {ClientEditComponent} from "./clients/client-edit/client-edit.component";
import {WorkersComponent} from "./workers/workers.component";
import {WorkerAddComponent} from "./workers/worker-add/worker-add.component";
import {WorkerEditComponent} from "./workers/worker-edit/worker-edit.component";
import {TicketTypesComponent} from "./ticket-types/ticket-types.component";
import {TicketTypeAddComponent} from "./ticket-types/ticket-type-add/ticket-type-add.component";
import {TicketTypeEditComponent} from "./ticket-types/ticket-type-edit/ticket-type-edit.component";
import {PaymentTypesComponent} from "./payment-types/payment-types.component";
import {PaymentTypeAddComponent} from "./payment-types/payment-type-add/payment-type-add.component";
import {PaymentTypeEditComponent} from "./payment-types/payment-type-edit/payment-type-edit.component";
import {TicketsComponent} from "./tickets/tickets.component";
import {TicketAddComponent} from "./tickets/ticket-add/ticket-add.component";
import {TicketEditComponent} from "./tickets/ticket-edit/ticket-edit.component";
import {MeasurementTypesComponent} from "./measurement-types/measurement-types.component";
import {MeasurementTypeAddComponent} from "./measurement-types/measurement-type-add/measurement-type-add.component";
import {MeasurementTypeEditComponent} from "./measurement-types/measurement-type-edit/measurement-type-edit.component";
import {ExerciseTypesComponent} from "./exercise-types/exercise-types.component";
import {ExerciseTypeAddComponent} from "./exercise-types/exercise-type-add/exercise-type-add.component";
import {ExerciseTypeEditComponent} from "./exercise-types/exercise-type-edit/exercise-type-edit.component";
import {TrainerInterviewComponent} from "./trainer-interview/trainer-interview.component";
import {TrainerInterviewEditComponent} from "./trainer-interview/trainer-interview-edit/trainer-interview-edit.component";
import {TrainerInterviewAddComponent} from "./trainer-interview/trainer-interview-add/trainer-interview-add.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExerciseAddComponent} from "./exercises/exercise-add/exercise-add.component";
import {ExerciseEditComponent} from "./exercises/exercise-edit/exercise-edit.component";
import {MeasurementsComponent} from "./measurements/measurements.component";
import {MeasurementAddComponent} from "./measurements/measurement-add/measurement-add.component";
import {MeasurementEditComponent} from "./measurements/measurement-edit/measurement-edit.component";
import {TrainerViewComponent} from "./trainer-view/trainer-view.component";
import {ReceptionistViewComponent} from "./receptionist-view/receptionist-view.component";

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
  {path: 'ticketTypes', component: TicketTypesComponent, canActivate: [AuthGuard]},
  {path: 'ticketTypes/add', component: TicketTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'ticketTypes/edit/:id', component: TicketTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes', component: PaymentTypesComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes/add', component: PaymentTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes/edit/:id', component: PaymentTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'tickets', component: TicketsComponent, canActivate: [AuthGuard]},
  {path: 'tickets/add', component: TicketAddComponent, canActivate: [AuthGuard]},
  {path: 'tickets/edit/:id', component: TicketEditComponent, canActivate: [AuthGuard]},
  {path: 'measurementTypes', component: MeasurementTypesComponent, canActivate: [AuthGuard]},
  {path: 'measurementTypes/add', component: MeasurementTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'measurementTypes/edit/:id', component: MeasurementTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'exerciseTypes', component: ExerciseTypesComponent, canActivate: [AuthGuard]},
  {path: 'exerciseTypes/add', component: ExerciseTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'exerciseTypes/edit/:id', component: ExerciseTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'trainerInterviews', component: TrainerInterviewComponent, canActivate: [AuthGuard]},
  {path: 'trainerInterviews/add', component: TrainerInterviewAddComponent, canActivate: [AuthGuard]},
  {path: 'trainerInterviews/edit/:id', component: TrainerInterviewEditComponent, canActivate: [AuthGuard]},
  {path: 'exercises', component: ExercisesComponent, canActivate: [AuthGuard]},
  {path: 'exercises/add', component: ExerciseAddComponent, canActivate: [AuthGuard]},
  {path: 'exercises/edit/:id', component: ExerciseEditComponent, canActivate: [AuthGuard]},
  {path: 'measurements', component: MeasurementsComponent, canActivate: [AuthGuard]},
  {path: 'measurements/add', component: MeasurementAddComponent, canActivate: [AuthGuard]},
  {path: 'measurements/edit/:id', component: MeasurementEditComponent, canActivate: [AuthGuard]},
  {path: 'trainerView', component: TrainerViewComponent, canActivate: [AuthGuard]},
  {path: 'receptionistView', component: ReceptionistViewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
