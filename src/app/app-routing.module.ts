import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import { TemplateSelectorComponent} from './components/template-selector/template-selector.component';
import { PersonalProfileComponent} from './components/personal-profile/personal-profile.component';
import { EducationalBackgroundComponent} from './components/educational-background/educational-background.component';
import { WorkHistoryComponent } from './components/work-history/work-history.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  { path: 'CVtemplate', component: TemplateSelectorComponent },
  { path: 'PersonalProfile/:id', component: PersonalProfileComponent },
  { path: 'Education/:id', component: EducationalBackgroundComponent },
  { path: 'Job/:id', component: WorkHistoryComponent },
  { path: 'Skill/:id', component: SkillsComponent },
  // { path: 'DownloadCV/:id', component: DownloadCVComponent },
  { path: '',
    redirectTo: '/CVtemplate',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
