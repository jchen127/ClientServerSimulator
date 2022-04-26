import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';


/*Components*/
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationSpaceComponent } from './navigation-space/navigation-space.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { IntakeJuvenileComponent } from './intake-juvenile/intake-juvenile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetainJuvenileComponent } from './detain-juvenile/detain-juvenile.component';
import { JudicateJuvenileComponent } from './judicate-juvenile/judicate-juvenile.component';
import { ReleaseJuvenileComponent } from './release-juvenile/release-juvenile.component';
import { RecruitStaffComponent } from './recruit-staff/recruit-staff.component';
import { DetainStaffComponent } from './detain-staff/detain-staff.component';
import { TrainStaffComponent } from './train-staff/train-staff.component';
import { ReleaseStaffComponent } from './release-staff/release-staff.component';
import { BuildFacilityComponent } from './build-facility/build-facility.component';
import { AbandonFacilityComponent } from './abandon-facility/abandon-facility.component';
import { RepairFacilityComponent } from './repair-facility/repair-facility.component';
import { FooterComponent } from './footer/footer.component';

/*Services*/
import {WidthServiceService} from "./width-service.service";
import {LoggingService} from "./Shared/Services/Logging.service";
import {corelogicService} from "./Shared/Services/corelogic.service";
import {UserService} from "./Shared/Services/user.service";

/*Directives*/
import {ToggleStaff} from "./navigation/DropdownDirectives/togglestaff.directive";
import {BetterToggleStaff} from "./navigation/DropdownDirectives/betterToggleStaff.directive";
import {ResizeDirective} from "./headline/HeaderDirectives/resize.directive"; //no longer used
import {ToggleAnotherStaffDirective} from "./navigation/DropdownDirectives/toggleAnotherStaff.directive";
import {NavigationComponent} from "./navigation/navigation.component";
import {
  NavigationregisterComponent
} from "./navigation/NavigationComponents/navigationregister/navigationregister.component";
import {NavigationsigninComponent} from "./navigation/NavigationComponents/navigationsignin/navigationsignin.component";
import {
  NavigationsignedinComponent
} from "./navigation/NavigationComponents/navigationsignedin/navigationsignedin.component";
import { AuthenticateComponent } from './navigation/authenticate/authenticate.component';
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    NavigationSpaceComponent,
    SearchComponent,
    PopularComponent,
    ResizeDirective,
    IntakeJuvenileComponent,
    NotFoundComponent,
    DetainJuvenileComponent,
    JudicateJuvenileComponent,
    ReleaseJuvenileComponent,
    RecruitStaffComponent,
    DetainStaffComponent,
    TrainStaffComponent,
    ReleaseStaffComponent,
    BuildFacilityComponent,
    AbandonFacilityComponent,
    RepairFacilityComponent,
    NavigationComponent,
    ToggleAnotherStaffDirective,
    NavigationregisterComponent,
    NavigationsigninComponent,
    NavigationsignedinComponent,
    ToggleStaff,
    BetterToggleStaff,
    FooterComponent,
    AuthenticateComponent
  ],
    imports: [
       HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDividerModule
    ],
  providers: [WidthServiceService, LoggingService, corelogicService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
