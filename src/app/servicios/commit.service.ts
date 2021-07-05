import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommitService {

  constructor(
    private http:HttpClient
  ) { }

  consultaDetalleCommit(sha:String):Observable<any>{

    let owner = localStorage.getItem("nombreUsuarioGithub");
    let repositorio = localStorage.getItem("repositorioGithub");    
    return this.http.get(environment.urlApiGitHub + "/repos/"+ owner + "/"+repositorio + "/commits/" + sha);
    
  }
}
