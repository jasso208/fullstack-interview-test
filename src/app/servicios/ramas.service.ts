import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RamasService {
  private owner:String = <String>localStorage.getItem("nombreUsuarioGithub");
  private repositorio:String = <String>localStorage.getItem("repositorioGithub");

  constructor(
    private http:HttpClient
  ) { }

  consultaRamas():Observable<any>{
    return this.http.get(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+this.repositorio + "/branches");  
  }

  consultaCommits(rama:String,paginaActual:String):Observable<any>{
    
    let per_page = environment.per_page;    
    return this.http.get(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+this.repositorio + "/commits?sha=" + rama + "&per_page=" + per_page + "&page=" + paginaActual) ;
  }


}
