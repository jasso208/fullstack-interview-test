import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  private owner:String = <String>localStorage.getItem("nombreUsuarioGithub");
  private repositorio:String = <String>localStorage.getItem("repositorioGithub");

  constructor(
    private http:HttpClient
  ) { }

  consultaDetalleCommit(sha:String):Observable<any>{
 
    return this.http.get(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+ this.repositorio + "/commits/" + sha);
    
  }
}
