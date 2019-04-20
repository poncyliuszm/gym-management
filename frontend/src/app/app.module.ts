import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClientsComponent, DeleteClientDialog} from './clients/clients.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from "@angular/material";
import {HomeComponent} from './home/home.component';
import {ClientService} from "./services/client.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MainNavComponent} from './main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {ClientAddComponent} from './clients/client-add/client-add.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoginComponent} from './login/login.component';
import {AuthService} from "./services/auth.service";
import {InterceptService} from "./services/interceptService";
import {AuthGuard} from "./services/auth-guard.service";
import {LoaderService} from "./services/LoaderService";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {DeleteWorkerDialog, WorkersComponent} from './workers/workers.component';
import {WorkerAddComponent} from './workers/worker-add/worker-add.component';
import {WorkerEditComponent} from './workers/worker-edit/worker-edit.component';
import {WorkerService} from "./services/worker.service";
import {RoleService} from "./services/role.service";
import {DeleteTicketTypeDialog, TicketTypesComponent} from './ticket-types/ticket-types.component';
import {TicketTypeService} from "./services/ticket-type.service";
import {TicketTypeAddComponent} from './ticket-types/ticket-type-add/ticket-type-add.component';
import {TicketTypeEditComponent} from './ticket-types/ticket-type-edit/ticket-type-edit.component';
import {DeletePaymentTypeDialog, PaymentTypesComponent} from "./payment-types/payment-types.component";
import {PaymentTypeAddComponent} from "./payment-types/payment-type-add/payment-type-add.component";
import {PaymentTypeEditComponent} from "./payment-types/payment-type-edit/payment-type-edit.component";
import {PaymentTypeService} from "./services/payment-type.service";
import {DeleteTicketDialog, TicketsComponent} from './tickets/tickets.component';
import {TicketService} from "./services/ticket.service";
import {TicketEditComponent} from './tickets/ticket-edit/ticket-edit.component';
import {TicketAddComponent} from './tickets/ticket-add/ticket-add.component';
import {DeleteMeasurementTypeDialog, MeasurementTypesComponent} from "./measurement-types/measurement-types.component";
import {MeasurementTypeAddComponent} from "./measurement-types/measurement-type-add/measurement-type-add.component";
import {MeasurementTypeEditComponent} from "./measurement-types/measurement-type-edit/measurement-type-edit.component";
import {MeasurementTypeService} from "./services/maesurement-type.service";
import {DeleteExerciseTypeDialog, ExerciseTypesComponent} from "./exercise-types/exercise-types.component";
import {ExerciseTypeEditComponent} from "./exercise-types/exercise-type-edit/exercise-type-edit.component";
import {ExerciseTypeAddComponent} from "./exercise-types/exercise-type-add/exercise-type-add.component";
import {ExerciseTypeService} from "./services/exercise-type.service";
import {DeleteTrainerInterviewDialog, TrainerInterviewComponent} from "./trainer-interview/trainer-interview.component";
import {TrainerInterviewsService} from "./services/trainer-interviews.service";
import {TrainerInterviewAddComponent} from "./trainer-interview/trainer-interview-add/trainer-interview-add.component";
import {TrainerInterviewEditComponent} from "./trainer-interview/trainer-interview-edit/trainer-interview-edit.component";


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent,
    MainNavComponent,
    ClientAddComponent,
    LoginComponent,
    ClientEditComponent,
    DeleteClientDialog,
    DeleteWorkerDialog,
    DeleteTicketTypeDialog,
    DeletePaymentTypeDialog,
    DeleteTicketDialog,
    DeleteMeasurementTypeDialog,
    DeleteExerciseTypeDialog,
    DeleteTrainerInterviewDialog,
    WorkersComponent,
    WorkerAddComponent,
    WorkerEditComponent,
    TicketTypesComponent,
    TicketTypeAddComponent,
    TicketTypeEditComponent,
    PaymentTypesComponent,
    PaymentTypeAddComponent,
    PaymentTypeEditComponent,
    TicketsComponent,
    TicketAddComponent,
    TicketEditComponent,
    MeasurementTypesComponent,
    MeasurementTypeAddComponent,
    MeasurementTypeEditComponent,
    ExerciseTypesComponent,
    ExerciseTypeAddComponent,
    ExerciseTypeEditComponent,
    TrainerInterviewComponent,
    TrainerInterviewAddComponent,
    TrainerInterviewEditComponent
  ],
  entryComponents: [
    DeleteClientDialog,
    DeleteWorkerDialog,
    DeleteTicketTypeDialog,
    DeletePaymentTypeDialog,
    DeleteTicketDialog,
    DeleteMeasurementTypeDialog,
    DeleteExerciseTypeDialog,
    DeleteTrainerInterviewDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTooltipModule
  ],
  providers: [
    ClientService,
    AuthService,
    AuthGuard,
    InterceptService,
    LoaderService,
    WorkerService,
    RoleService,
    TicketTypeService,
    PaymentTypeService,
    TicketService,
    MeasurementTypeService,
    ExerciseTypeService,
    TrainerInterviewsService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
