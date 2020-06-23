import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroe } from '../../services/heroes.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[];
  
  constructor(private _heroesService:HeroesService,private router:Router) { 
    console.log('contructor');
  }

  ngOnInit(): void {
    // console.log(this._heroesService.getHeroes());
    this.heroes = this._heroesService.getHeroes();
  }

  verHeroe(index:number){
    console.log(index);
    this.router.navigate(['heroe',index]);
  }

  

}
