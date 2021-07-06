import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService {

  constructor(
    private http:HttpClient
  ) { }
  
  crearPullRequest(form:FormGroup):Observable<any>{    
    let owner = localStorage.getItem("nombreUsuarioGithub");
    let repositorio = localStorage.getItem("repositorioGithub");    
    return this.http.post(environment.urlApiGitHub + "/repos/"+ owner + "/"+repositorio + "/pulls",form.value);

  }

  consultaPullsRequest(paginaActual:String):Observable<any>{
    let owner = localStorage.getItem("nombreUsuarioGithub");
    let repositorio = localStorage.getItem("repositorioGithub");
    let per_page = environment.per_page;    
    return this.http.get(environment.urlApiGitHub + "/repos/"+ owner + "/"+repositorio + "/pulls?state=all" + "&per_page=" + per_page + "&page=" + paginaActual);
  }

  actualizaPullRequest(idPullRequest:String):Observable<any>{    
    let owner = localStorage.getItem("nombreUsuarioGithub");
    let repositorio = localStorage.getItem("repositorioGithub");
    
    return this.http.patch(environment.urlApiGitHub + "/repos/"+ owner + "/"+repositorio + "/pulls/" + idPullRequest,{"state":"closed"});
  }
}

