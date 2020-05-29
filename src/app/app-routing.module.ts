import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PatientsComponent } from './patients/patients.component';
import { MenuComponent } from './menu/menu.component';
import { StatsComponent } from './stats/stats.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: 'inicio',
        component: HomeComponent
      },
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'pacientes',
        component: PatientsComponent
      },
      {
        path: 'estadisticas',
        component: StatsComponent
      },
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
