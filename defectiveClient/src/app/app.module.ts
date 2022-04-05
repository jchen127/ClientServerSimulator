import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*Components*/
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSpaceComponent } from './navigation-space/navigation-space.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';

/*Services*/
import {WidthServiceService} from "./width-service.service";

/*Directives*/
import {ToggleStaff} from "./navigation/DropdownDirectives/togglestaff.directive";
import {BetterToggleStaff} from "./navigation/DropdownDirectives/betterToggleStaff.directive";
import {ResizeDirective} from "./headline/HeaderDirectives/resize.directive"; //no longer used



@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    NavigationComponent,
    NavigationSpaceComponent,
    SearchComponent,
    PopularComponent,
    FooterComponent,
    ToggleStaff,
    BetterToggleStaff,
    ResizeDirective //no longer used
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [WidthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
