import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationBarComponent } from './header/navigation-bar/navigation-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LocationPopupComponent } from './header/location-popup/location-popup.component';
import { CityComponent } from './header/location-popup/city/city.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CuisineComponent } from './header/location-popup/cuisine/cuisine.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationBarComponent,
    LocationPopupComponent,
    CityComponent,
    CuisineComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
