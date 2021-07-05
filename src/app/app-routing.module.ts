import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';

const routes: Routes = [
  { path: 'consulta-ramas', component: ConsultaRamasComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
