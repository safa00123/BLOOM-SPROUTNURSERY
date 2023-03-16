import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent {

  single:any
 constructor(private hero: HeroService,private r:Router){}
 ngOnInit():void{
  let title=localStorage.getItem('title')
  if(title==='Succulents'){
    this.single=this.hero.giveSucculentsData();
    console.log(this.single);
  }else if(title==='Bonsai Plants'){
    this.single=this.hero.giveBonsaiPlantsData();
  }
  else if(title==='Flowering Plants'){
    this.single=this.hero.giveFloweringPlantsData();
 }
 else if(title==='Creepers'){
  this.single=this.hero.giveCreepersData();
}
else if(title==='Herbs'){
  this.single=this.hero.giveHerbsData();
}
else if(title==='Aromatic Fragrant plants'){
  this.single=this.hero.giveAromaticFragrantplantsData();
}
 else if(title==='Potting Soils'){
  this.single=this.hero.givepottingSof();
 }
 else if(title==='Organic Fertilizers'){
   this.single=this.hero.giveorganicSof();
}
 else if(title==='Soil Additives'){
   this.single=this.hero.givesoilSof();
 }
 else if(title==='Cocopeat'){
   this.single=this.hero.givecocoSof()
 }
 
else if(title==='Ceramic Planters'){
  this.single=this.hero.giveCeramicPlantersAcc()
}
else if(title==='Garden Pebbles'){
  this.single=this.hero.giveGardenPebblesAcc()
}
else if(title==='Garden Tools'){
  this.single=this.hero.giveGardenToolsAcc()
}
}
 buyNow(id:string){
  localStorage.setItem('buyId',id);
  this.r.navigate(['/buy']);
 }

 range(end: number): number[] {
  let start = 1
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

 }

