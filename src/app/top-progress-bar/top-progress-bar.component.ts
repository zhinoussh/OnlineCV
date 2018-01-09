import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workstar-top-progress-bar',
  templateUrl: './top-progress-bar.component.html',
  styleUrls: ['./top-progress-bar.component.scss']
})
export class TopProgressBarComponent implements OnInit {

  headerItems: string[]= ['Choose Template', 'Personal Profile', 'Education', 'Work Experience', 'Skills & Certificates'];
  constructor() { }

  ngOnInit() {
  }

}
