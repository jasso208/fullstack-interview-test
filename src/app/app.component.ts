import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'fullstack-interview-test';

  public formRepositorio:FormGroup;

  constructor(
    private fb:FormBuilder,
    private route:Router
  ){
    this.formRepositorio = fb.group(
      {
        nombreUsuarioGithub : new FormControl(),
        repositorioGithub : new FormControl()
      }
    );
  }

  ngOnInit(){
    this.formRepositorio.get("nombreUsuarioGithub")?.setValue(localStorage.getItem("nombreUsuarioGithub"));
    this.formRepositorio.get("repositorioGithub")?.setValue(localStorage.getItem("repositorioGithub"));
  }

  cambiaUsuarioGitHub(){
    
    let nombreUsuarioGithub= this.formRepositorio.get("nombreUsuarioGithub")?.value;
    let repositorioGithub= this.formRepositorio.get("repositorioGithub")?.value;

    
    localStorage.setItem("nombreUsuarioGithub",nombreUsuarioGithub);
    localStorage.setItem("repositorioGithub",repositorioGithub);

    this.route.navigate(['./']);
    
  }

  


}
