import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ServicesComponent } from './pages/services/services.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { SoilandfertilizersComponent } from './pages/soilandfertilizers/soilandfertilizers.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { FooterComponent } from './utils/footer/footer.component';
import { SingleComponent } from './pages/single/single.component';
import { BuyComponent } from './pages/buy/buy.component';
import { TermsandconditionsComponent } from './pages/termsandconditions/termsandconditions.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { AccessoriesComponent } from './pages/accessories/accessories.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    LoginComponent,
    RegistrationComponent,
    ContactComponent,
    ServicesComponent,
    FeedbackComponent,
    CategoriesComponent,
    SoilandfertilizersComponent,
    NavbarComponent,
    FooterComponent,
    SingleComponent,
    BuyComponent,
    TermsandconditionsComponent,
    PrivacypolicyComponent,
    AccessoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
