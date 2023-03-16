import { Component } from '@angular/core';
import { HeroService } from 'src/app/hero.service';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  services:any;

  constructor(private hs:HeroService){}

  ngOnInit() {
   this.services = this.hs.getServices()
   console.log(this.services);

}
}
