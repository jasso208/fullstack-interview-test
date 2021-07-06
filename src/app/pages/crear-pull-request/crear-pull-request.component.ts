import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ramas } from 'src/app/models/ramas';
import { PullRequestService } from 'src/app/servicios/pull-request.service';
import { RamasService } from 'src/app/servicios/ramas.service';

@Component({
  selector: 'app-crear-pull-request',
  templateUrl: './crear-pull-request.component.html',
  styleUrls: ['./crear-pull-request.component.css']
})
export class CrearPullRequestComponent implements OnInit {
  public objRamas : Array<Ramas>;
  public muestraNotificacion : boolean;
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public muestraModalCargando:boolean;
  public formCreatePullRequest:FormGroup;

  public objError:HttpErrorResponse;

  constructor(
    private ramasService:RamasService,
    private fb:FormBuilder,
    private prService:PullRequestService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.consultaRamas();

    this.formCreatePullRequest = this.fb.group({
      base:new FormControl("",[Validators.required]),
      head:new FormControl("",[Validators.required]),
      title:new FormControl("",[Validators.required]),
      body:new FormControl("",[Validators.required])
    });

  }

  crearPullRequest(){
    if(this.formCreatePullRequest.valid){

      this.muestraModalCargando = true;
      this.prService.crearPullRequest(this.formCreatePullRequest)
      .subscribe(
        data=>{
          this.router.navigate(['../consulta-pulls-request']);    
          this.muestraModalCargando = false;
        },
        error=>{
          this.objError = error;          
          this.tipoNotificacion = "Error!!";
          this.msjNotificacion = "Error al crear el Pull Request. ";
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


    }else{
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Revise la información del formulario. los campos marcados con (*) son obligatorios.";
        this.muestraNotificacion = true;
    }
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
