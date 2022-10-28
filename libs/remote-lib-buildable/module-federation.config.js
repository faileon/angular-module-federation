module.exports = {
  name: 'remote-lib',
  exposes: {
    './Module': 'libs/remote-lib-buildable/src/lib/remote-lib-buildable.module.ts',
  },
};
