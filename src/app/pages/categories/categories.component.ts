import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  constructor(private hero : HeroService, private router: Router){}
  data=this.hero.giveData();
  gotoHere(id:string){
   localStorage.setItem('title',id)
   this.router.navigate(['/single'])

}
}
