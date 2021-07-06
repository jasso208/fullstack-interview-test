import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  private owner:String;
  private repositorio:String;

  constructor(
    private http:HttpClient
  ) {
    this.owner = <String>localStorage.getItem("nombreUsuarioGithub");
    this.repositorio = <String>localStorage.getItem("repositorioGithub");
   }

  consultaDetalleCommit(sha:String):Observable<any>{
 
    return this.http.get(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+ this.repositorio + "/commits/" + sha);
    
  }
}
