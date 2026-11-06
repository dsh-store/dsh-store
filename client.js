window.__ModuleLoader__.load({
  id: 'dshstore',
  factory(require) {
    const { createElement } = require('react')
    const ns = 'dsh-store-hello'
    const dictionaries = {
      zh: { tab: 'DSH 商店', greeting: '你好！👋', description: 'DSH Store 测试插件已加载。' },
      en: { tab: 'DSH Store', greeting: 'Hi there! 👋', description: 'The DSH Store test plugin is loaded.' },
      ru: { tab: 'Магазин DSH', greeting: 'Привет! 👋', description: 'Тестовый плагин DSH Store загружен.' },
      fr: { tab: 'Boutique DSH', greeting: 'Bonjour ! 👋', description: 'Le plug-in de test DSH Store est chargé.' },
      es: { tab: 'Tienda DSH', greeting: '¡Hola! 👋', description: 'El complemento de prueba de DSH Store está cargado.' },
      ar: { tab: 'متجر DSH', greeting: 'مرحبًا! 👋', description: 'تم تحميل إضافة DSH Store التجريبية.' },
      ja: { tab: 'DSH ストア', greeting: 'こんにちは！👋', description: 'DSH Store のテストプラグインが読み込まれました。' },
      ko: { tab: 'DSH 스토어', greeting: '안녕하세요! 👋', description: 'DSH Store 테스트 플러그인이 로드되었습니다.' },
    }
    const render = ({ t }) => createElement('div', { style: { padding: '32px' } },
      createElement('h1', null, t('greeting')),
      createElement('p', null, t('description')))

    return {
      name: 'dshstore',
      inject: ['slots', 'locale'],
      apply(ctx) {
        ctx.effect(() => ctx.locale.register(ns, dictionaries), 'dsh-store: translations')
        const t = ctx.locale.bind(ns)
        for (const slot of ['plugins.tab', 'settings.plugins.tab']) {
          ctx.slots.inject(slot, () => ctx.slots.register({
            name: slot,
            id: 'dshstore',
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
