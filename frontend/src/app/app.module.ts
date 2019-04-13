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
    WorkersComponent,
    WorkerAddComponent,
    WorkerEditComponent,
    TicketTypesComponent,
    TicketTypeAddComponent,
    TicketTypeEditComponent,
    PaymentTypesComponent,
    PaymentTypeAddComponent,
    PaymentTypeEditComponent
  ],
  entryComponents: [
    DeleteClientDialog,
    DeleteWorkerDialog,
    DeleteTicketTypeDialog,
    DeletePaymentTypeDialog
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
    {provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
