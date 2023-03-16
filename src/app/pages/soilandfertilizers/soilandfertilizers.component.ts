import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-soilandfertilizers',
  templateUrl: './soilandfertilizers.component.html',
  styleUrls: ['./soilandfertilizers.component.css']
})
export class SoilandfertilizersComponent {

  constructor(private hero : HeroService, private router: Router){}
  sof=this.hero.giveSof();
  gotoHere(id:string){
   localStorage.setItem('title',id)
   this.router.navigate(['/single'])

}

}
