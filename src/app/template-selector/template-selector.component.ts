import { Component, OnInit } from '@angular/core';
import { SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {Cvtemplate} from '../models/cvtemplate';
import { SharedGeneratingLevelService } from '../services/shared-generator-level/shared-generating-level.service';
import { Router } from '@angular/router';

@Component({
  selector: 'workstar-template-selector',
  templateUrl: './template-selector.component.html',
  styleUrls: ['./template-selector.component.scss']
})
export class TemplateSelectorComponent implements OnInit {

  public templateArray: Cvtemplate[] = [
    {
      templateID: 1,
      templateFile: '../../assets/templates/template1.jpg',
      templateName: 'first'
    },
    {
      templateID: 2,
      templateFile: '../../assets/templates/template2.jpg',
      templateName: 'second'
    },
    {
      templateID: 3,
      templateFile: '../../assets/templates/template3.jpg',
      templateName: 'third'
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


  constructor(private router: Router,
              private generatorLevelservice: SharedGeneratingLevelService) { }

  ngOnInit() {
  }

  public chooseTemplate(id: number) {
    this.router.navigateByUrl('PersonalProfile/' + id);
    this.generatorLevelservice.setGeneratorLevel(1);
  }

}
