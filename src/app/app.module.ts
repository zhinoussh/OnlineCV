import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TemplateSelectorComponent } from './template-selector/template-selector.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';

import {FlexLayoutModule} from '@angular/flex-layout';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { TopProgressBarComponent } from './top-progress-bar/top-progress-bar.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboard: true
};

@NgModule({
  declarations: [
    AppComponent,
    TemplateSelectorComponent,
    PageNotFoundComponent,
    TopProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SwiperModule
  ],
  providers: [
     {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
