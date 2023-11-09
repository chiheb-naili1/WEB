import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReseauComponent } from './reseau/reseau.component';
import { Login2Component } from './login2/login2.component';
import { GroupeComponent } from './groupe/groupe.component';
import { LastComponent } from './last/last.component';
import { PaiementComponent } from './paiement/paiement.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reseau', component: ReseauComponent },
  { path: 'login2', component: Login2Component },
  { path: 'groupe', component: GroupeComponent },
  { path: 'last', component: LastComponent },
  { path: 'paiement', component: PaiementComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
