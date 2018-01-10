import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalBackgroundComponent } from './educational-background.component';

describe('EducationalBackgroundComponent', () => {
  let component: EducationalBackgroundComponent;
  let fixture: ComponentFixture<EducationalBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationalBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationalBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
