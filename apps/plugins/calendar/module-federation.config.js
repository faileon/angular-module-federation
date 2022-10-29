module.exports = {
  name: 'plugins-calendar',
  exposes: {
    './Module': 'apps/plugins/calendar/src/app/remote-entry/entry.module.ts',
    './Component': 'apps/plugins/calendar/src/app/exposed/exposed.component.ts',
  },
};
