import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { RemoteLibEntryComponent } from './remote-lib-entry/remote-lib-entry.component';


@NgModule({
  declarations: [RemoteLibEntryComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RemoteLibEntryComponent
      }
    ]),
  ]
})
export class RemoteLibBuildableModule {}
