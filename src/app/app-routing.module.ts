import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ServicesComponent } from './pages/services/services.component';
import { SoilandfertilizersComponent } from './pages/soilandfertilizers/soilandfertilizers.component';
import { SingleComponent } from './pages/single/single.component';
import { BuyComponent } from './pages/buy/buy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';
const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"homepage", component:HomepageComponent},
  {path:"login", component:LoginComponent},
  {path:"contact", component:ContactComponent},
  {path:"registration",component:RegistrationComponent},
  {path:"feedback",component:FeedbackComponent},
  {path:"aboutus",component:AboutusComponent},
  {path:"categories",component:CategoriesComponent},
  {path:"services",component:ServicesComponent},
  {path:"soilandfertilizers",component:SoilandfertilizersComponent},
  {path:'single',component:SingleComponent},
  {path:"footer",component:FooterComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"buy",component:BuyComponent},
  {path:"termsandconditions",component:TermsandconditionsComponent},
  {path:"privacypolicy",component:PrivacypolicyComponent},
  {path:"accessories",component:AccessoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
