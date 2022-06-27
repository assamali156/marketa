import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatIconModule} from '@angular/material/icon';
import { CategoryComponent } from './Components/category/category.component';
import { PriceComponent } from './Components/price/price.component';
import { ContactComponent } from './Components/contact/contact.component';
import { DetailsComponent } from './Components/details/details.component';
import { FeaturesComponent } from './Components/features/features.component';
import { MaintenanceComponent } from './Components/maintenance/maintenance.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { OptionsComponent } from './Components/options/options.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { EndButtonsComponent } from './end-buttons/end-buttons.component'

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    PriceComponent,
    ContactComponent,
    DetailsComponent, 
    FeaturesComponent,
    MaintenanceComponent,
    NavbarComponent,
    OptionsComponent,
    PhotosComponent,
    EndButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
