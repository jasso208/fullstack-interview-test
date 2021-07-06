import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';
import { DetalleRamaComponent } from './pages/detalle-rama/detalle-rama.component';
import { DetalleCommitComponent } from './pages/detalle-commit/detalle-commit.component';
import { ConsultaPullsRequestComponent } from './pages/consulta-pulls-request/consulta-pulls-request.component';
import { CrearPullRequestComponent } from './pages/crear-pull-request/crear-pull-request.component';
const routes: Routes = [
  { path: 'consulta-ramas', component: ConsultaRamasComponent},
  { path: 'detalle-rama/:rama', component: DetalleRamaComponent},  
  { path: 'detalle-commit/:sha', component: DetalleCommitComponent},
  { path: 'consulta-pulls-request', component: ConsultaPullsRequestComponent},
  { path: 'crear-pulls-request', component: CrearPullRequestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

