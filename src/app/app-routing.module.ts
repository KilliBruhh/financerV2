import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { RegisterComponent } from './register/register.component';
import { ManageInvoiceComponent } from './manage-invoice/manage-invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'addInvoice', component: AddComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'manageInvoice', component: ManageInvoiceComponent},
  { path: 'editInvoice/:id', component: EditInvoiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
