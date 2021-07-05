import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';
import { DetalleRamaComponent } from './pages/detalle-rama/detalle-rama.component';
import { DetalleCommitComponent } from './pages/detalle-commit/detalle-commit.component';
const routes: Routes = [
  { path: 'consulta-ramas', component: ConsultaRamasComponent,  pathMatch: 'full'},
  { path: 'detalle-rama/:rama', component: DetalleRamaComponent,  pathMatch: 'full'},  
  { path: 'detalle-commit/:sha', component: DetalleCommitComponent,  pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
