import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import {PersonalProfile} from '../../models/personal-profile';
import { SharedGeneratingLevelService } from '../../services/shared-generator-level/shared-generating-level.service';

@Component({
  selector: 'workstar-personal-profile',
  templateUrl: './personal-profile.component.html',
  styleUrls: ['./personal-profile.component.scss']
})
export class PersonalProfileComponent implements OnInit {

  selectedTemplateId: number;
  profile: PersonalProfile;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private generatorLevelService: SharedGeneratingLevelService ) {
      this.profile = new PersonalProfile('', '', '', '', '');
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.selectedTemplateId = params['id'];
    });
  }

  SavePersonalProfile() {
      // save data to server and return inserted id
      // http post with[ profile + templateid]
      const id = 0;
      // navigate to next component
      this.generatorLevelService.setGeneratorLevel(2);
      this.router.navigateByUrl('Education/' + id);
  }

  ReturnToTemplates() {
    this.generatorLevelService.setGeneratorLevel(0);
    this.router.navigate(['CVtemplate']);
  }
}
