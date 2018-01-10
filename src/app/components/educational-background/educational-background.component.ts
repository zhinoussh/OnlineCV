import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { SharedGeneratingLevelService } from '../../services/shared-generator-level/shared-generating-level.service';
import { Education } from '../../models/education';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workstar-educational-background',
  templateUrl: './educational-background.component.html',
  styleUrls: ['./educational-background.component.scss']
})
export class EducationalBackgroundComponent implements OnInit {

  CVId: number;
  educationArray: Education[];
  educationItem: Education;
  editingIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private generatorLevelService: SharedGeneratingLevelService ) {
      this.educationArray = new Array<Education>();
      this.educationItem = new Education('', '', '');
      this.editingIndex = -1;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.CVId = params['id'];
    });
  }

  AddEducationItem(educationItemForm: FormGroup) {
    const newItem = new Education(this.educationItem.title,
      this.educationItem.institute,
      this.educationItem.graduationYear);
        
    if (this.editingIndex === -1) {
      this.educationArray.push(newItem);    
    } else {
      this.educationArray[this.editingIndex] = newItem;
    }
    educationItemForm.reset();
    this.editingIndex = -1;
  }

  EditEducationItem(selectedIndex: number) {
    const editingItem = this.educationArray[selectedIndex];
    this.educationItem.title = editingItem.title;
    this.educationItem.institute = editingItem.institute;
    this.educationItem.graduationYear = editingItem.graduationYear;
    this.editingIndex = selectedIndex;
  }

  DeleteEducationItem(selectedIndex: number) {
    this.educationArray.splice(selectedIndex, 1);
  }

  MoveUpEducationItem(selectedIndex: number) {
    if (selectedIndex > 0) {
      const temp = this.educationArray[selectedIndex - 1];
      this.educationArray[selectedIndex - 1] =  this.educationArray[selectedIndex];
      this.educationArray[selectedIndex] = temp;
    }
  }

  MoveDownEducationItem(selectedIndex: number) {
    if (selectedIndex !== this.educationArray.length - 1) {
      const temp = this.educationArray[selectedIndex + 1];
      this.educationArray[selectedIndex + 1] =  this.educationArray[selectedIndex];
      this.educationArray[selectedIndex] = temp;
    }
  }
  SaveAllEducation() {
    // post request to set education for CVId(send array + CVID)

    this.generatorLevelService.setGeneratorLevel(3);
  }

}
