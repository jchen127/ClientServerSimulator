import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/*Components*/
import { AppComponent } from './app.component';
import { HeadlineComponent } from './headline/headline.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationSpaceComponent } from './navigation-space/navigation-space.component';
import { SearchComponent } from './search/search.component';
import { PopularComponent } from './popular/popular.component';
import { FooterComponent } from './footer/footer.component';

//Juvenile
import { IntakeJuvenileComponent } from './intake-juvenile/intake-juvenile.component';
import {DetainJuvenileComponent} from './detain-juvenile/detain-juvenile.component';
import {ReleaseJuvenileComponent} from './release-juvenile/release-juvenile.component';
import {JudicateJuvenileComponent} from './judicate-juvenile/judicate-juvenile.component';

//Staff
import {DetainStaffComponent} from './detain-staff/detain-staff.component';
import {RecruitStaffComponent} from './recruit-staff/recruit-staff.component';
import {ReleaseStaffComponent} from './release-staff/release-staff.component';
import {TrainStaffComponent} from './train-staff/train-staff.component';

//Facility
import {AbandonFacilityComponent} from './abandon-facility/abandon-facility.component';
import {BuildFacilityComponent} from './build-facility/build-facility.component';
import {RepairFacilityComponent} from './repair-facility/repair-facility.component';

import {NotFoundComponent} from './not-found/not-found.component'


const routes: Routes = [
  {path: 'intakeJ', component: IntakeJuvenileComponent},
  {path: 'detainJ', component: DetainJuvenileComponent},
  {path: 'releaseJ', component: ReleaseJuvenileComponent},
  {path: 'judicateJ', component: JudicateJuvenileComponent},

  {path: 'detainS', component: DetainStaffComponent},
  {path: 'recruitS', component: RecruitStaffComponent},
  {path: 'releaseS', component: ReleaseStaffComponent},
  {path: 'trainS', component: TrainStaffComponent},

  {path: 'abandonF', component: AbandonFacilityComponent},
  {path: 'buildF', component: BuildFacilityComponent},
  {path: 'repairF', component: RepairFacilityComponent},

  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
