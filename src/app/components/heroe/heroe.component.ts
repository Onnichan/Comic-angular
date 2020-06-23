import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  heroe:any={};

  constructor(private activeRoute:ActivatedRoute,private _heroeService:HeroesService) { 
    this.activeRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.heroe = this._heroeService.getHeroe(params['id']);
    })
  }

  ngOnInit(): void {
  }

}
