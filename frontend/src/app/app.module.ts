import {BrowserModule, DomSanitizer} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ClientsComponent} from './clients/clients.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatIconRegistry,
  MatInputModule,
  MatListModule, MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
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


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    HomeComponent,
    MainNavComponent,
    ClientAddComponent,
    LoginComponent
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
    // MatIconRegistry,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    ClientService,
    AuthService,
    AuthGuard,
    InterceptService,
    LoaderService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptService, multi: true}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
