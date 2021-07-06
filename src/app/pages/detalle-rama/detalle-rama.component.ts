import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commit } from 'src/app/models/commit';
import { RamasService } from 'src/app/servicios/ramas.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-detalle-rama',
  templateUrl: './detalle-rama.component.html',
  styleUrls: ['./detalle-rama.component.css']
})
export class DetalleRamaComponent implements OnInit {

  public rama:String = "";
  public commits: Array<Commit>;
  public muestraModalCargando:boolean = false;
  public muestraNotificacion : boolean = false;  
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public paginaActual:number = 1;
  public paginaSiguiente:number = 2;
  public paginaAnterior:number = 0;

  public mostrarBotonAtras:boolean = false;
  public mostrarBotonSiguiente:boolean = true;
  constructor(
    private activatedRoute:ActivatedRoute,
    private ramasService:RamasService
  ) { 
    this.commits = new Array<Commit>();
  }


  ngOnInit(): void {
    this.rama = <String>this.activatedRoute.snapshot.paramMap.get("rama");
    this.consultaCommits(1);
  }

  consultaCommits(pagina:number){

    this.paginaActual = pagina;

    this.muestraModalCargando = true;
    this.ramasService.consultaCommits(this.rama,this.paginaActual.toString())
    .subscribe(
      data=>{
        console.log(data);
        this.commits = data;    
        this.calculaPaginaSiguienteyAnterior();
        this.muestraModalCargando = false;    

      },
      error =>{

        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al cargar el listado de commits de la rama " + this.rama + ".";
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
    

    if (this.commits.length == 0){
      this.mostrarBotonSiguiente = false;
    }
    else{
      this.mostrarBotonSiguiente = true;
    }



    
    
  }



}
