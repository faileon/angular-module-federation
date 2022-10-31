import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {loadRemoteModule} from "@nrwl/angular/mf";
import {RandomService} from "@ng-mfa/shared/data-access/random";

@Component({
  selector: 'ng-mfa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('cmpRef', {read: ViewContainerRef})
  public cmpRef!: ViewContainerRef;

  @ViewChild('cmpStandaloneRef', {read: ViewContainerRef})
  public cmpStandaloneRef!: ViewContainerRef;

  title = 'shell';


  constructor(public randomService: RandomService) {
  }

  ngOnInit() {

    loadRemoteModule('calendar', './Component').then(container => {
      const {ExposedComponent} = container;
      this.cmpRef.createComponent(ExposedComponent);
    })

    loadRemoteModule('standalone', './Component').then(container => {
      const {RemoteEntryComponent} = container;
      this.cmpStandaloneRef.createComponent(RemoteEntryComponent);
    })

  }
}
