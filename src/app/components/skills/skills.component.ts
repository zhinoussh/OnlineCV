import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';
import { SharedGeneratingLevelService } from '../../services/shared-generator-level/shared-generating-level.service';
import { Skill } from '../../models/skill';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'workstar-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  
  CVId: number;
  skillArray: Skill[];
  skillItem: Skill;
  editingIndex: number;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private generatorLevelService: SharedGeneratingLevelService ) {
      this.skillArray = new Array<Skill>();
      this.skillItem = new Skill('', '', '');
      this.editingIndex = -1;
   }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.CVId = params['id'];
    });
  }

  AddskillItem(skillItemForm: FormGroup) {
    const newItem = new Skill(this.skillItem.skillName,
      this.skillItem.Institute,
      this.skillItem.year);
        
    if (this.editingIndex === -1) {
      this.skillArray.push(newItem);    
    } else {
      this.skillArray[this.editingIndex] = newItem;
    }
    skillItemForm.reset();
    this.editingIndex = -1;
  }

  EditskillItem(selectedIndex: number) {
    const editingItem = this.skillArray[selectedIndex];
    this.skillItem.skillName = editingItem.skillName;
    this.skillItem.Institute = editingItem.Institute;
    this.skillItem.year = editingItem.year;
    this.editingIndex = selectedIndex;
  }

  DeleteskillItem(selectedIndex: number) {
    this.skillArray.splice(selectedIndex, 1);
  }

  MoveUpskillItem(selectedIndex: number) {
    if (selectedIndex > 0) {
      const temp = this.skillArray[selectedIndex - 1];
      this.skillArray[selectedIndex - 1] =  this.skillArray[selectedIndex];
      this.skillArray[selectedIndex] = temp;
    }
  }

  MoveDownskillItem(selectedIndex: number) {
    if (selectedIndex !== this.skillArray.length - 1) {
      const temp = this.skillArray[selectedIndex + 1];
      this.skillArray[selectedIndex + 1] =  this.skillArray[selectedIndex];
      this.skillArray[selectedIndex] = temp;
    }
  }
  SaveAllskill() {
    // post request to set skills for CVId(send array + CVID)

    this.generatorLevelService.setGeneratorLevel(5);
    this.router.navigateByUrl('DownloadCV/' + this.CVId);
  }


}
