import {Route} from '@angular/router';
import {loadRemoteModule} from "@nrwl/angular/mf";

export const appRoutes: Route[] = [
  {
    path: 'calendar',
    loadChildren: () => loadRemoteModule('calendar', './Module').then(m => m.RemoteEntryModule)
  },

];
