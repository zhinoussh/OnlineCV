import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SharedGeneratingLevelService } from '../services/shared-generator-level/shared-generating-level.service';

@Component({
  selector: 'workstar-top-progress-bar',
  templateUrl: './top-progress-bar.component.html',
  styleUrls: ['./top-progress-bar.component.scss']
})
export class TopProgressBarComponent implements OnInit, OnDestroy {

  headerItems: string[]= ['Choose Template', 'Personal Profile', 'Education', 'Work Experience', 'Skills & Certificates'];
  private level: number;
  generatorLevelSubscription: Subscription;

  constructor(private generatorLevelService: SharedGeneratingLevelService) {
    this.level = 0;
    this.generatorLevelSubscription = this.generatorLevelService.generatorLevelChange
    .subscribe((value) => { this.level = value; });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.generatorLevelSubscription.unsubscribe();
  }

}
