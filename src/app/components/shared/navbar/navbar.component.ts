import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino:string){
    console.log(termino);
    // console.log(this.buscadorHeroeService.buscarHeroes(termino));
    // let heroeBuscado = this.buscadorHeroeService.buscarHeroes(termino);
    // heroeBuscado.forEach((value,index)=>{
      // this.router.navigate(['buscador',index]);
      // console.log(index);
    // })
    this.router.navigate(['/buscador',termino]);
    
  }
}
