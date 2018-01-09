import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto',
  keyboard: true
};

@NgModule({
  imports: [
    CommonModule,
    SwiperModule
  ],
  declarations: [],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  exports: [
    SwiperModule
  ]
})
export class ImageSwiperModule { }
