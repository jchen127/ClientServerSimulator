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



import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import {ResizeDirective} from "./headline/HeaderDirectives/resize.directive";


@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    NavigationComponent,
    NavigationSpaceComponent,
    SearchComponent,
    PopularComponent,
    FooterComponent,
    ResizeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [WidthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
