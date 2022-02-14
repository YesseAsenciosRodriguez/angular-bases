import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
  Heroes: string[] =["Spirderman","Ironman","Hulk","Thor","Capitan America"];
  HeroeBorrado: string = ""
    borrarHeroe(){
      this.HeroeBorrado= this.Heroes.shift() || '';  
    }

}
