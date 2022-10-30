module.exports = {
  name: 'shell',
  remotes: [], // empty array = dynamic module federation,
  /*shared: (libraryName, defaultConfig) => {
    console.log('sharing', libraryName, 'with config', defaultConfig);
    return defaultConfig
  },*/
  additionalShared: [
    ['@ng-mfa/shared/data-access/random', {singleton: true, requiredVersion: '>=1.0.0 <1.1.1', strictVersion: true}]
  ]
};
