import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaRamasComponent } from './pages/consulta-ramas/consulta-ramas.component';
import { HttpClientModule } from '@angular/common/http';
import { DetalleRamaComponent } from './pages/detalle-rama/detalle-rama.component';
import { DetalleCommitComponent } from './pages/detalle-commit/detalle-commit.component';
@NgModule({
  declarations: [
    AppComponent,
    ConsultaRamasComponent,
    DetalleRamaComponent,
    DetalleCommitComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
