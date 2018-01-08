import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {Cvtemplate} from '../models/cvtemplate';

@Component({
  selector: 'workstar-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {

  public templateArray: Cvtemplate[] = [
    new Cvtemplate {
      templateID: 1,
      templateFile: '../../assets/templates/template1.jpg',
      templateName: 'first'
    }
  ];
  
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };


  constructor() { }

  ngOnInit() {
  }

  // public onIndexChange(index: number) {
  //   console.log('Swiper index: ', index);
  // }

  public chooseTemplate(){

  }

}
