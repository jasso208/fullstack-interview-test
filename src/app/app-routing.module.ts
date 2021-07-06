import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';
import { DetalleRamaComponent } from './pages/detalle-rama/detalle-rama.component';
import { DetalleCommitComponent } from './pages/detalle-commit/detalle-commit.component';
import { ConsultaPullsRequestComponent } from './pages/consulta-pulls-request/consulta-pulls-request.component';
import { CrearPullRequestComponent } from './pages/crear-pull-request/crear-pull-request.component';
const routes: Routes = [
  { path: 'consulta-ramas', component: ConsultaRamasComponent,  pathMatch: 'full'},
  { path: 'detalle-rama/:rama', component: DetalleRamaComponent,  pathMatch: 'full'},  
  { path: 'detalle-commit/:sha', component: DetalleCommitComponent,  pathMatch: 'full'},
  { path: 'consulta-pulls-request', component: ConsultaPullsRequestComponent,  pathMatch: 'full'},
  { path: 'crear-pulls-request', component: CrearPullRequestComponent,  pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
