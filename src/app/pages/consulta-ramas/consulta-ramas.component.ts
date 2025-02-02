import { Component, OnInit } from '@angular/core';
import { Ramas } from 'src/app/models/ramas';
import { RamasService } from 'src/app/servicios/ramas.service';

@Component({
  selector: 'app-consulta-ramas',
  templateUrl: './consulta-ramas.component.html',
  styleUrls: ['./consulta-ramas.component.css']
})
export class ConsultaRamasComponent implements OnInit {

  public repositorio : String="";
  public objRamas : Array<Ramas>;
  public muestraNotificacion : boolean;
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public muestraModalCargando:boolean;

  constructor(
    private ramasService:RamasService
  ) { 
    this.repositorio = <String>localStorage.getItem("repositorioGithub");
    this.objRamas = new Array<Ramas>();
    this.muestraNotificacion = false;
    this.muestraModalCargando = false;
  }

  ngOnInit(): void {
    this.consultaRamas();
  }

  consultaRamas(){
    this.muestraModalCargando = true;
    this.ramasService.consultaRamas()
    .subscribe(
      data => {        
        this.objRamas = data;
        this.muestraModalCargando = false;
      },
      error => {

        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "No se encontraron ramas para el repositorio "+localStorage.getItem("repositorioGithub")+" del usuario "+localStorage.getItem("nombreUsuarioGithub")+", valide que el repositorio no sea privado.";
        this.muestraNotificacion = true;
        this.muestraModalCargando = false;
        //console.log(error);
      }

    );
  }

}
