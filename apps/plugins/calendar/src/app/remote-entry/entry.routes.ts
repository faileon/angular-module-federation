import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';

export const remoteRoutes: Route[] = [
  {
    path: '',
    component: RemoteEntryComponent
  },
  {
    path: 'lazy',
    loadChildren: () => import('../lazy/lazy.module').then(m => m.LazyModule)
  }
];
