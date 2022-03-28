import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSpaceComponent } from './navigation-space/navigation-space.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';

import {WidthServiceService} from "./width-service.service";

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    NavigationComponent,
    NavigationSpaceComponent,
    SearchComponent,
    PopularComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [WidthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
