window.__ModuleLoader__.load({
  id: 'dsh-store-hello',
  factory(require) {
    const { createElement } = require('react')
    const render = () => createElement('div', { style: { padding: '32px' } },
      createElement('h1', null, 'Hi there! 👋'),
      createElement('p', null, 'DSH Store 测试插件已加载。'))

    return {
      name: 'dsh-store-hello',
      inject: ['slots'],
      apply(ctx) {
        for (const slot of ['plugins.tab', 'settings.plugins.tab']) {
          ctx.slots.inject(slot, () => ctx.slots.register({
            name: slot,
            id: 'dsh-store-hello',
            order: 1,
            label: () => 'DSH Store',
          }, render))
        }
      },
    }
  },
})
