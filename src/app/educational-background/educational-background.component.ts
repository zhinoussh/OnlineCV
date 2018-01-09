import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { SharedGeneratingLevelService } from '../services/shared-generator-level/shared-generating-level.service';
import { Education } from '../models/education';

@Component({
  selector: 'workstar-educational-background',
  templateUrl: './educational-background.component.html',
  styleUrls: ['./educational-background.component.scss']
})
export class EducationalBackgroundComponent implements OnInit {

  CVId: number;
  educationArray: Education[];

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private generatorLevelService: SharedGeneratingLevelService ) {
      
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.CVId = params['id'];
    });
  }

  AddEducationItem() {

  }

  SaveAllEducation() {
    // post request to set education for CVId(send array + CVID)

    this.generatorLevelService.setGeneratorLevel(3);
  }


}
