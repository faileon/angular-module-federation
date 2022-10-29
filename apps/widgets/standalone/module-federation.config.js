module.exports = {
  name: 'widgets-standalone',
  exposes: {
    './Routes': 'apps/widgets/standalone/src/app/remote-entry/entry.routes.ts',
  },
};
