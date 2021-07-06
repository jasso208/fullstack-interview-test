import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DetalleRamaComponent } from './pages/detalle-rama/detalle-rama.component';
import { DetalleCommitComponent } from './pages/detalle-commit/detalle-commit.component';
import { ConsultaPullsRequestComponent } from './pages/consulta-pulls-request/consulta-pulls-request.component';
import { AuthApiService } from './interceptors/auth-api.service';
import { CrearPullRequestComponent } from './pages/crear-pull-request/crear-pull-request.component';
@NgModule({
  declarations: [
    AppComponent,
    ConsultaRamasComponent,
    DetalleRamaComponent,
    DetalleCommitComponent,
    ConsultaPullsRequestComponent,
    CrearPullRequestComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS,useClass:AuthApiService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
