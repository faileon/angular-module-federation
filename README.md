# Plugin Architektura s Webpack5, NX a Angular 14+ (Ivy + AOT)
## Jak spustit:
1. Vybuildit plugin a widget (mělo by být součástí gitu, lze přeskočit na krok 3.)
   1. `npm run build:remotes`
1. přetáhnout obsah složky `dist/apps` do `apps/shell/assets` (v assets tedy bude složka `plugins` a `widgets`)
1. spustit aplikaci pomocí: `nx run shell:serve:production`
1. otevřít [aplikaci](http://localhost:4200)
---
1. Alternativně lze vše servnout s hot reloadem:
   1. `npm run start:all`
1. otevřít [aplikaci](http://localhost:4200) 


## Jak to funguje
- Využívá [Module Federation](https://webpack.js.org/concepts/module-federation/) koncept webpacku 
- Pro správné načítání modulů je nutné, aby webpack věděl, kde se daný modul nachází - k tomu slouží funkce `setRemoteDefinitions`, která se aktuálně volá při bootstrapu shell aplikace v `apps/shell/src/main.ts`
  - **Tento manifest lze ale nastavit kdykoliv**, jediná podmínka je, aby se tak stalo ještě před tím, než se pokusíme naloadovat modul pomoci funkce `loadRemoteModule`
- Každý plugin si ve svém souboru `module-federation.config.js` může nastavit své entry pointy pomocí atributu `exposes`. Může to být modul, komponenta, cesty pro ng-router...
- Aktuálně se například v `apps/shell/src/app/app.routes.ts` stahuje modul pluginu `calendar`, který zaregistruje své cesty do ng-routeru. 
  - Nyní jsem se nezabýval implementací pro správu pluginu, takže cesta `calendar` je hardcoded, není ovšem problém tyto cesty nastavit dynamicky, např. po fetchnuti z BE.
- V aplikaci `apps/shell/src/app/app.component.ts` se take renderuji 2 komponenty - jedna z pluginu calendar a druha z widgetu, jež je standalone builditelna komponenta. 
  - Opět je to zde mírně hardoced, ale analogicky jako s cestami `calendar` pluginu, není problém tyto informace nastavit dynamicky, např. po fetchnuti z BE.


## Výhody
- pro načtení pluginu se používá funkce z NX `@nrwl/angular/mf/loadRemoteModule`, která pod pokličkou používá webpack a jejich [ModuleFederation plugin](https://webpack.js.org/plugins/module-federation-plugin/)
  - heavy lifting tedy dělá NX, potažmo webpack
  - kompatibilní s NX incremental builds
- Díky webpacku chunkování funguje rekurzivně - **lazy loading tedy funguje kdekoliv**, i v dynamicky načteném pluginu
- Samostatné pluginy a widgety lze `servnout`, tím pádem je velmi jednoduchý jejich developement. Lze je take vybuildit a zazipovat pro účel pluginizace (_inspirace názvu z deduplikace_).
  - Možnost snadné implementace e2e testu na jednotlivé pluginy

## Nevyhody
- zatím jsem na nic neřešitelného nenarazil

## NX's withModuleFederation
- Opinionated wrapper na [ModuleFederationPlugin](https://webpack.js.org/plugins/module-federation-plugin/) webpacku 
- Výchozí sdílené dependencies jsou: 
  - @angular/animations
  - @angular/common
  - npm packages (podle root package.json)
  - všechny @nrwl/workspace:library
  - dependencies co vyčte z projectGraphu, tzn. pokud naimportuju nejakou knihovnu z monorepa, sam ji prida do sharovanych dependencies. Zpravidla je to žádoucí chování, lze tomu ale zabránit v configu.

## Verzování
- své verze si každý plugin a appka udržují ve svém `package.json`
- appka nebo plugin si v souboru `module-federation.config.js` mohou dale specifikovat, které verze jednotlivých pluginu potřebují, např.:
```js
  {
  // ...
  additionalShared: [
    ['@ng-mfa/shared/data-access/random', {singleton: true, requiredVersion: '~1.0.0', strictVersion: true}]
  ]
}
```
- Pokud dojde k neshodě smluvených verzí, upozorní nás webpack následujícím runtime errorem:
  - `Unsatisfied version 2.0.0 from shell of shared singleton module @ng-mfa/shared/data-access/random (required >=1.0.0 <1.1.1)`
- **requiredVersion** lze specifikovat v několika formátech:
  - standardní formát s ~ nebo ^, např.:
    - ~1.0.0, nebo-li 1.0.x
    - ^1.0.0, nebo-li 1.x.x
  - rozsah, např.:
    - '>=1.0.0 <1.1.1', nebo-li verze od 1.0.0 (včetně) až 1.1.1 (vyjma)

## Commands
- nový plugin:
  - `npx nx g @nrwl/angular:remote plugins/<PLUGIN_NAME>`
- nový widget jako standalone component:
  - `npx nx g @nrwl/angular:remote widgets/<WIDGET_NAME> --standalone`

## Source codes
- Zdroják je mnohdy lepší než dokumentace od NX, tak přikládám i url k těm stěžejním věcem
- **withModuleFederation** wrapper:
  - https://github.com/nrwl/nx/blob/master/packages/angular/src/utils/mf/with-module-federation.ts
- **loadRemoteModule** - dynamické načítání modulů.
  - https://github.com/nrwl/nx/blob/master/packages/angular/mf/mf.ts

## TODO:
- [x] verify lazy loading inside plugins works
- [x] exposing component from a plugin and loading it elsewhere (shell)
- [x] standalone components (widgets)
- [x] create shared lib with some state and verify it's shared in app and plugins
- [x] versioning and shared modules, conflicts, etc.
- [ ] dynamically create routes (requires implementing plugin management with backend, omitted for now)
- [ ] build and zip automatically (streamline the process - so we don't have to zip manually)
- [ ] verify that errors in plugins don't crash shell app, if so, implement error catching (perhaps outside ng-zone?)
