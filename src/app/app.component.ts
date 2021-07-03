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
        nombreRepositorioGithub : new FormControl()
      }
    );
  }

  ngOnInit(){
    this.formRepositorio.get("nombreRepositorioGithub")?.setValue(localStorage.getItem("nombreRepositorioGitHub"));
  }

  cambiaRepositorioGitHub(){
    let nombreRepositorioGithub= this.formRepositorio.get("nombreRepositorioGithub")?.value;
    localStorage.setItem("nombreRepositorioGitHub",nombreRepositorioGithub);
    window.location.reload();
  }

  


}
