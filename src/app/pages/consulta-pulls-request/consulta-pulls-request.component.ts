import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PullRequest } from 'src/app/models/pull-request';
import { PullRequestService } from 'src/app/servicios/pull-request.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-consulta-pulls-request',
  templateUrl: './consulta-pulls-request.component.html',
  styleUrls: ['./consulta-pulls-request.component.css']
})
export class ConsultaPullsRequestComponent implements OnInit {

  public muestraNotificacion : boolean;
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public muestraModalCargando:boolean;

  public listaPullRequest:Array<PullRequest>;

  public paginaActual:number = 1;
  public paginaSiguiente:number = 2;
  public paginaAnterior:number = 0;

  public mostrarBotonAtras:boolean = false;
  public mostrarBotonSiguiente:boolean = true;

  public objError:HttpErrorResponse;

  constructor(
    private prService:PullRequestService
  ) { }

  ngOnInit(): void {
    this.consultaPullsRequest(1);
    this.listaPullRequest = new Array<PullRequest>();
  }

  consultaPullsRequest(pagina:number){
    this.paginaActual = pagina;
    this.muestraModalCargando = true;
    this.prService.consultaPullsRequest(this.paginaActual.toString())
    .subscribe(      
       data =>{

        this.listaPullRequest = data;        
        this.calculaPaginaSiguienteyAnterior();
        this.muestraModalCargando = false;
        

      },
      error =>{
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al cargar la información solicitada.";
        this.muestraNotificacion = true;
        this.muestraModalCargando = false;
      }
    );
  }

  actualizaPullRequest(id:number){
    this.muestraModalCargando = true;
    this.prService.actualizaPullRequest(id.toString())
    .subscribe(
      data =>{
       this.consultaPullsRequest(this.paginaActual);
        this.muestraModalCargando = false;
        this.tipoNotificacion = "Aviso!!";
        this.msjNotificacion = "El Pull Request se actualizo correctamente.";
        this.muestraNotificacion = true;
      },
      error =>{
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al actualizar la información.";
        this.muestraNotificacion = true;
        this.muestraModalCargando = false;
      }
    );
  }

  mergePullRequest(id:number){
    this.muestraModalCargando = true;

    this.prService.mergePullRequest(id.toString())
    .subscribe(
      data =>{
        console.log(data);
        this.consultaPullsRequest(this.paginaActual);
        this.muestraModalCargando = false;
        this.tipoNotificacion = "Aviso!!";
        this.msjNotificacion = "El merge se realizo correctamente.";
        this.muestraNotificacion = true;
      },
      error =>{
        console.log(error);
        this.objError = error;          
          this.tipoNotificacion = "Error!!";
          this.msjNotificacion = "Error al hacer el merge. ";
          try{
            for (let e of this.objError.error.errors){
              this.msjNotificacion = this.msjNotificacion + e.message + ". "
            }
          }
          catch(e){}
          this.muestraNotificacion = true;
          this.muestraModalCargando = false;
      }
    );
  }

  
  calculaPaginaSiguienteyAnterior(){

    if(this.paginaActual == 1){
      this.paginaAnterior = 0;
      this.mostrarBotonAtras = false;  
    }
    else{
      this.paginaAnterior = this.paginaActual - 1;;      
      this.mostrarBotonAtras = true;  
    }

    this.paginaSiguiente = this.paginaActual + 1;
    
    if (this.listaPullRequest.length == 0){
      this.mostrarBotonSiguiente = false;
    }
    else{
      this.mostrarBotonSiguiente = true;
    }

      
      
    
    
  }

}
