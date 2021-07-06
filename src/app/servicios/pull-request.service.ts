import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PullRequestService {

  private owner:String = <String>localStorage.getItem("nombreUsuarioGithub");
  private repositorio:String = <String>localStorage.getItem("repositorioGithub");
  
  constructor(
    private http:HttpClient
  ) { }
  
  crearPullRequest(form:FormGroup):Observable<any>{    
    return this.http.post(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+this.repositorio + "/pulls",form.value);
  }

  consultaPullsRequest(paginaActual:String):Observable<any>{
    let per_page = environment.per_page;    
    return this.http.get(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+this.repositorio + "/pulls?state=all" + "&per_page=" + per_page + "&page=" + paginaActual);
  }

  actualizaPullRequest(idPullRequest:String):Observable<any>{   
    
    return this.http.patch(environment.urlApiGitHub + "/repos/"+ this.owner + "/"+this.repositorio + "/pulls/" + idPullRequest,{"state":"closed"});
  }

  mergePullRequest(idPullRequest:String):Observable<any>{
    return this.http.put(environment.urlApiGitHub +  "/repos/"+ this.owner + "/"+this.repositorio + "/pulls/" + idPullRequest + "/merge ",{"commit_title":"NA"});
  }
}

