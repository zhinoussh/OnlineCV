import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedGeneratingLevelService {

  generatorLevel: number;
  generatorLevelChange: Subject<number> = new Subject<number>();

  constructor() { 
    this.generatorLevel = 0;
  }

  public setGeneratorLevel(newLevel: number) {
    this.generatorLevel = newLevel;
    this.generatorLevelChange.next(newLevel);
  }

}
