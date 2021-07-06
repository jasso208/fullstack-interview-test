import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Commit } from 'src/app/models/commit';
import { CommitService } from 'src/app/servicios/commit.service';

@Component({
  selector: 'app-detalle-commit',
  templateUrl: './detalle-commit.component.html',
  styleUrls: ['./detalle-commit.component.css']
})
export class DetalleCommitComponent implements OnInit {
  
  public sha:String="";
  public commit:Commit;
  public muestraModalCargando:boolean = false;
  public muestraNotificacion : boolean = false;  
  public tipoNotificacion:String = "";
  public msjNotificacion:String = "";
  public numArchivosModificados:number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private commitService:CommitService
  ) { 
    this.sha = <String>this.activatedRoute.snapshot.paramMap.get("sha");
    //this.commit = new Commit();
    console.log(this.commit);
  }

  ngOnInit(): void {
    this.consultaDetalleCommit();
  }

  consultaDetalleCommit(){
    this.commitService.consultaDetalleCommit(this.sha)
    .subscribe(
      data =>{

        this.commit = data;
        this.numArchivosModificados = this.commit.files.length;
      },
      error =>{
        console.log(error);
        this.tipoNotificacion = "Error!!";
        this.msjNotificacion = "Error al cargar la información.";
        this.muestraNotificacion = true;
        this.muestraModalCargando = false; 
      }
    );
  }

}
