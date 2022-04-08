import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/*Components*/
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSpaceComponent } from './navigation-space/navigation-space.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';
import { IntakeJuvenileComponent } from './intake-juvenile/intake-juvenile.component';

/*Services*/
import {WidthServiceService} from "./width-service.service";

/*Directives*/
import {ToggleStaff} from "./navigation/DropdownDirectives/togglestaff.directive";
import {BetterToggleStaff} from "./navigation/DropdownDirectives/betterToggleStaff.directive";
import {ResizeDirective} from "./headline/HeaderDirectives/resize.directive"; //no longer used
import {ToggleAnotherStaffDirective} from "./navigation/DropdownDirectives/toggleAnotherStaff.directive";
import { NotFoundComponent } from './not-found/not-found.component';
import { DetainJuvenileComponent } from './detain-juvenile/detain-juvenile.component';
import { JudicateJuvenileComponent } from './judicate-juvenile/judicate-juvenile.component';
import { ReleaseJuvenileComponent } from './release-juvenile/release-juvenile.component';






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
    ToggleAnotherStaffDirective,
    ResizeDirective,
    IntakeJuvenileComponent,
    NotFoundComponent,
    DetainJuvenileComponent,
    JudicateJuvenileComponent,
    ReleaseJuvenileComponent //no longer used
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,

    ],
  providers: [WidthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
