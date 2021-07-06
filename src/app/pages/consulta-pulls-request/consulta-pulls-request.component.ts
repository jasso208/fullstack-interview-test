import { Component, OnInit } from '@angular/core';
import { PullRequest } from 'src/app/models/pull-request';
import { PullRequestService } from 'src/app/servicios/pull-request.service';

@Component({
  selector: 'app-consulta-pulls-request',
  templateUrl: './consulta-pulls-request.component.html',
  styleUrls: ['./consulta-pulls-request.component.css']
})
export class ConsultaPullsRequestComponent implements OnInit {

  public muestraNotificacion : boolean;
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public muestraCargando:boolean;

  public listaPullRequest:Array<PullRequest>;
  constructor(
    private prService:PullRequestService
  ) { }

  ngOnInit(): void {
    this.consultaPullsRequest();
    this.listaPullRequest = new Array<PullRequest>();
  }

  consultaPullsRequest(){
    this.muestraCargando = true;
    this.prService.consultaPullsRequest()
    .subscribe(      
       data =>{

        this.listaPullRequest = data;
        this.muestraCargando = false;
        

      },
      error =>{
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al cargar la información solicitada.";
        this.muestraNotificacion = true;
        this.muestraCargando = false;
      }
    );
  }

  actualizaPullRequest(id:number){
    this.muestraCargando = true;
    this.prService.actualizaPullRequest(id.toString())
    .subscribe(
      data =>{
       this.consultaPullsRequest();
        this.muestraCargando = false;
        this.tipoNotificacion = "Aviso!!";
        this.msjNotificacion = "El Pull Request se actualizo correctamente.";
        this.muestraNotificacion = true;
      },
      error =>{
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al actualizar la información.";
        this.muestraNotificacion = true;
        this.muestraCargando = false;
      }
    );
  }

}
