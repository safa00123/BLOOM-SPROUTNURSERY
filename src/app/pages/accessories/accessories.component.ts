import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent {
  constructor(private hero : HeroService, private router: Router){}
  acc=this.hero.giveAcc();
  gotoHere(id:string){
   localStorage.setItem('title',id)
   this.router.navigate(['/single'])

}


}
