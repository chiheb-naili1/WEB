import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { FormComponent } from './form/FormComponent';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReseauComponent } from './reseau/reseau.component';
import { Login2Component } from './login2/login2.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LastComponent } from './last/last.component';
import { PaiementComponent } from './paiement/paiement.component';
@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    FormComponent,
    LoginComponent,
    ContactComponent,
    ReseauComponent,
    Login2Component,
    
    GroupeComponent,
         LastComponent,
         PaiementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
