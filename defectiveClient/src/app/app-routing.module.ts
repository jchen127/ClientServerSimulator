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
import { IntakeJuvenileComponent } from './intake-juvenile/intake-juvenile.component';
import {NotFoundComponent} from './not-found/not-found.component'

const routes: Routes = [
  {path: 'intakeJ', component: IntakeJuvenileComponent},
  {path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
