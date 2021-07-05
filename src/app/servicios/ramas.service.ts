import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RamasService {
  constructor(
    private http:HttpClient
  ) { }

  consultaRamas():Observable<any>{
    let owner = localStorage.getItem("nombreUsuarioGithub");
    let repositorio = localStorage.getItem("repositorioGithub");
    return this.http.get(environment.urlApiGitHub + "/repos/"+ owner + "/"+repositorio + "/branches");  
  }


}
