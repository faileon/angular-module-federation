# Výhody:
- pro nacitani pluginu pouzivam funkce z NX, ktere pod pokličkou pouzivaji webpack a jejich ModuleFederation
  - heavy lifting tedy dela nx-ko, potazmo spis webpack
  - kompatibilní s nx incremental builds
- diky webpacku funguje opravdove lazy loadovani i v nactenem pluginu
- samostatne pluginy a widgety lze `nx serve` a tim padem jednoduse vyvijet, lze je take vybuildit a zazipovat pro ucely nasi pluginizace.
  - moznost snadne integrace e2e testu

# Commands
- novy plugin `npx nx g @nrwl/angular:remote plugins/<PLUGIN_NAME> --style=scss`
- novy plugin/widget jako standalone componenta

# Source codes
- https://github.com/nrwl/nx/blob/master/packages/angular/mf/mf.ts
- https://github.com/nrwl/nx/blob/master/packages/angular/src/utils/mf/with-module-federation.ts
