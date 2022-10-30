import {Injectable, NgModuleRef} from '@angular/core';
import {map, Observable, share, timer} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  public randomString$: Observable<string>

  constructor(private moduleRef: NgModuleRef<any>) {
    console.log(">>> Random Service from", this.moduleRef);
    this.randomString$ = timer(0, 5000)
      .pipe(
        map(() => Math.random().toString(36)),
        share(),
      )

  }
}
