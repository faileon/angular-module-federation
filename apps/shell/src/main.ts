import {setRemoteDefinitions} from '@nrwl/angular/mf';
import {environment} from "./environments/environment";

fetch(environment.production ?
  '/assets/available-plugins-built.manifest.json' :
  '/assets/available-plugins.manifest.json'
)
  .then(res => res.json())
  .then(definitions => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap')
    .catch((err) => console.error(err))
  );

