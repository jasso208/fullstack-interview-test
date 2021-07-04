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

  constructor(private fb:FormBuilder){
    this.formRepositorio = fb.group(
      {
        nombreUsuarioGithub : new FormControl()
      }
    );
  }

  ngOnInit(){
    this.formRepositorio.get("nombreUsuarioGithub")?.setValue(localStorage.getItem("nombreUsuarioGithub"));
  }

  cambiaUsuarioGitHub(){
    let nombreUsuarioGithub= this.formRepositorio.get("nombreUsuarioGithub")?.value;
    localStorage.setItem("nombreUsuarioGithub",nombreUsuarioGithub);
    window.location.reload();
  }

  


}
