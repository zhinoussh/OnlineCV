import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { SharedGeneratingLevelService } from '../../services/shared-generator-level/shared-generating-level.service';
import { FormGroup } from '@angular/forms';
import {JobExperience} from '../../models/job-experience';

@Component({
  selector: 'workstar-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {

  CVId: number;
  experienceArray: JobExperience[];
  experienceItem: JobExperience;
  editingIndex: number;
  yearArray: string[];
  monthArray: string[];
  StillInRole: boolean;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private generatorLevelService: SharedGeneratingLevelService ) {
      this.experienceArray = new Array<JobExperience>();
      this.experienceItem = new JobExperience('', '', '', '-1', '-1', '-1', '-1', false);
      this.editingIndex = -1;
      // set year array
      const currentYear = (new Date()).getFullYear();
      this.yearArray = new Array<string>();
       for (let i = currentYear; i >= currentYear - 50; i--) {
          this.yearArray.push(i.toString());
       }

       // set month array
       this.monthArray = new Array<string>();
       this.monthArray.push('Jan');
       this.monthArray.push('Feb');
       this.monthArray.push('Mar');
       this.monthArray.push('Apr');
       this.monthArray.push('May');
       this.monthArray.push('Jun');
       this.monthArray.push('Jul');
       this.monthArray.push('Aug');
       this.monthArray.push('Sep');
       this.monthArray.push('Oct');
       this.monthArray.push('Nov');
       this.monthArray.push('Dec');
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.CVId = params['id'];
    });
  }

  AddExperienceItem(experienceItemForm: FormGroup) {
    const newItem = new JobExperience(this.experienceItem.jobTitle,
      this.experienceItem.Employer, this.experienceItem.Location,
      this.experienceItem.startMonth, this.experienceItem.startYear,
      this.experienceItem.endMonth, this.experienceItem.endYear, this.experienceItem.stillInRole);
        
    if (this.editingIndex === -1) {
      this.experienceArray.push(newItem);    
    } else {
      this.experienceArray[this.editingIndex] = newItem;
    }
    experienceItemForm.reset();
    this.experienceItem.startMonth = '-1';
    this.experienceItem.startYear = '-1';
    this.experienceItem.endMonth = '-1';
    this.experienceItem.endYear = '-1';
    this.editingIndex = -1;
  }

  EditExperienceItem(selectedIndex: number) {
    const editingItem = this.experienceArray[selectedIndex];
    this.experienceItem.jobTitle = editingItem.jobTitle;
    this.experienceItem.Employer = editingItem.Employer;
    this.experienceItem.Location = editingItem.Location;
    this.experienceItem.startMonth = editingItem.startMonth;
    this.experienceItem.startYear = editingItem.startYear;
    this.experienceItem.endMonth = editingItem.endMonth;
    this.experienceItem.endYear = editingItem.endYear;
    this.editingIndex = selectedIndex;
  }

  DeleteExperienceItem(selectedIndex: number) {
    this.experienceArray.splice(selectedIndex, 1);
  }

  MoveUpExperienceItem(selectedIndex: number) {
    if (selectedIndex > 0) {
      const temp = this.experienceArray[selectedIndex - 1];
      this.experienceArray[selectedIndex - 1] =  this.experienceArray[selectedIndex];
      this.experienceArray[selectedIndex] = temp;
    }
  }

  MoveDownExperienceItem(selectedIndex: number) {
    if (selectedIndex !== this.experienceArray.length - 1) {
      const temp = this.experienceArray[selectedIndex + 1];
      this.experienceArray[selectedIndex + 1] =  this.experienceArray[selectedIndex];
      this.experienceArray[selectedIndex] = temp;
    }
  }
  SaveAllExperiences() {
    // post request to set Jobs for CVId(send array + CVID)

    this.generatorLevelService.setGeneratorLevel(4);
    this.router.navigateByUrl('Skill/' + this.CVId);
  }

  checkDropdownsValidity() {
    return this.experienceItem.startMonth !== '-1' && this.experienceItem.startYear !== '-1'
    && (this.experienceItem.stillInRole || (this.experienceItem.endMonth !== '-1' && this.experienceItem.endYear !== '-1'));
  }

}
