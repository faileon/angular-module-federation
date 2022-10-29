import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from "@nrwl/angular/mf";

@Component({
  selector: 'ng-mfa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('cmpRef', {read: ViewContainerRef})
  public cmpRef!: ViewContainerRef;

  title = 'shell';

  ngOnInit() {

    loadRemoteModule('calendar', './Component').then(container => {
      const {ExposedComponent} = container;
      this.cmpRef.createComponent(ExposedComponent);
    })

  }
}
