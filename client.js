window.__ModuleLoader__.load({
  id: 'dshget',
  factory(require) {
    const { createElement } = require('react')
    const ns = 'dshget'
    const dictionaries = {
      zh: { tab: 'DSH Get', greeting: '你好！👋', description: 'DSH Get 测试插件已加载。' },
      en: { tab: 'DSH Get', greeting: 'Hi there! 👋', description: 'The DSH Get test plugin is loaded.' },
      ru: { tab: 'DSH Get', greeting: 'Привет! 👋', description: 'Тестовый плагин DSH Get загружен.' },
      fr: { tab: 'DSH Get', greeting: 'Bonjour ! 👋', description: 'Le plug-in de test DSH Get est chargé.' },
      es: { tab: 'DSH Get', greeting: '¡Hola! 👋', description: 'El complemento de prueba de DSH Get está cargado.' },
      ar: { tab: 'DSH Get', greeting: 'مرحبًا! 👋', description: 'تم تحميل إضافة DSH Get التجريبية.' },
      ja: { tab: 'DSH Get', greeting: 'こんにちは！👋', description: 'DSH Get のテストプラグインが読み込まれました。' },
      ko: { tab: 'DSH Get', greeting: '안녕하세요! 👋', description: 'DSH Get 테스트 플러그인이 로드되었습니다.' },
    }
    const render = ({ t }) => createElement('div', { style: { padding: '32px' } },
      createElement('h1', null, t('greeting')),
      createElement('p', null, t('description')))

    return {
      name: 'dshget',
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(ns, dictionaries), 'dshget: translations')
        const t = ctx.locale.bind(ns)
        for (const slot of ['plugins.tab', 'settings.plugins.tab']) {
          ctx.slots.inject(slot, () => ctx.slots.register({
            name: slot,
            id: 'dshget',
            order: -99,
            locale: ns,
            label: () => t('tab'),
            inject: () => ({ t }),
          }, render))
        }
      },
    }
  },
})
