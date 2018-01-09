import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ImageSwiperModule } from './modules/image-swiper.module';

import { AppComponent } from './app.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { TopProgressBarComponent } from './top-progress-bar/top-progress-bar.component';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';

import { SharedGeneratingLevelService } from './services/shared-generator-level/shared-generating-level.service';
import { EducationalBackgroundComponent } from './educational-background/educational-background.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateSelectorComponent,
    PageNotFoundComponent,
    TopProgressBarComponent,
    PersonalProfileComponent,
    EducationalBackgroundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FlexLayoutModule,
    ImageSwiperModule
  ],
  providers: [     
     SharedGeneratingLevelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
