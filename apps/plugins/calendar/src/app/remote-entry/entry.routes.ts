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

// [✓] try lazy loading here
// [✓] try exposing component from this module and load it
// todo try standalone components as widgets
// todo create shared lib with some state and show it in independent MFEs
// todo dynamically create routes based on manifest
// todo versioning and shared modules
