import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { NewUserComponent } from './auth/new-user/new-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'register', component: NewUserComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'loans', loadChildren: () => import('./loans/loans.module').then(m => m.LoansModule) },
  { path: 'deposits', loadChildren: () => import('./deposits/deposits.module').then(m => m.DepositsModule) },
  { path: 'loan-types', loadChildren: () => import('./loan-types/loan-types.module').then(m => m.LoanTypesModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
