import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, Heroe} from '../../services/heroes.service';

@Component({
  selector:'app-buscador',
  templateUrl:'./buscador.component.html'
})

export class BuscadorComponent implements OnInit{

  heroes:any[] = [];

  constructor(private ruta:ActivatedRoute,private heroeBuscado:HeroesService){
  }

  ngOnInit(){
    this.ruta.params.subscribe(params=>{
      this.heroes = this.heroeBuscado.buscarHeroes(params['termino']);
      console.log(this.heroes);
    });
  }
}