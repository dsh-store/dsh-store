window.__ModuleLoader__.load({
  id: 'dshget',
  factory(require) {
    const React = require('react')
    const h = React.createElement
    const { useEffect, useMemo, useState } = React
    const CATALOG = 'https://cdn.jsdelivr.net/npm/dsh-plugin-catalog/index.json'
    const FALLBACK = 'https://awesome-dsh-plugin.com/index.json'
    const text = {
      zh: {
        tab: 'DSH Get', title: '发现适合你的插件', subtitle: '浏览社区插件，了解来源后交给 DSH 安装。', search: '搜名称、作者或功能', all: '全部', popular: '插件分类', count: n => `${n.toLocaleString()} 个条目`,
        browse: '探索插件', order: '目录顺序', latest: '最新',
        install: '安装', details: '详情', refresh: '刷新', back: '返回列表', loading: '正在读取社区目录…', loadingHint: '目录来自 Awesome DSH Plugin', retry: '重试', empty: '没有找到匹配的插件', emptyHint: '试试更短的关键词或选择其他分类。',
        source: '目录来源', author: '作者 / 仓库', version: '最新版本', kind: '分发方式', npm: 'npm 包', github: 'GitHub 仓库',
        attribution: '目录数据来自 Awesome DSH Plugin，依据 CC0 1.0 提供。插件由各自作者维护；收录不代表 DSH Get 审核或背书。',
        openSource: '查看上游目录', error: '目录暂时无法读取', errorHint: '检查网络后重试；也可以稍后再来。', installHint: 'DSH 将显示原生安装确认和进度。', noDescription: '作者没有提供简介。', close: '关闭',
      },
      en: {
        tab: 'DSH Get', title: 'Find your next plugin', subtitle: 'Explore community plugins, review their sources, then install with DSH.', search: 'Search name, author, or feature', all: 'All', popular: 'Categories', count: n => `${n.toLocaleString()} listings`,
        browse: 'Explore plugins', order: 'Catalog order', latest: 'Latest',
        install: 'Install', details: 'Details', refresh: 'Refresh', back: 'Back to results', loading: 'Loading the community catalog…', loadingHint: 'Catalog provided by Awesome DSH Plugin', retry: 'Retry', empty: 'No matching plugins', emptyHint: 'Try a shorter search or another category.',
        source: 'Catalog source', author: 'Author / repository', version: 'Latest version', kind: 'Distribution', npm: 'npm package', github: 'GitHub repository',
        attribution: 'Catalog data from Awesome DSH Plugin, released under CC0 1.0. Plugins are maintained by their respective authors; listing is not a DSH Get review or endorsement.',
        openSource: 'View upstream catalog', error: 'The catalog could not be loaded', errorHint: 'Check your connection and retry, or come back later.', installHint: 'DSH will show its native installation confirmation and progress.', noDescription: 'The author has not provided a description.', close: 'Close',
      },
    }
    const css = `
      .dsg{--dsg-surface:var(--dsw-alias-bg-base, #fff);--dsg-accent:var(--dsw-alias-brand-primary-new-colorprimary-new-color, #5267e8);--dsg-ink:var(--dsw-alias-label-primary, #202533);--dsg-muted:var(--dsw-alias-label-secondary, #737b8c);--dsg-line:var(--dsw-alias-border-l2, #e8eaf0);--dsg-soft:var(--dsw-alias-bg-layer-1, #f6f7fb);--accent:var(--dsg-accent);--muted:var(--dsg-muted);--line:var(--dsg-line);--soft:var(--dsg-soft);color:var(--dsg-ink);font:14px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;min-height:100%;padding:28px clamp(16px,4vw,52px);box-sizing:border-box;background:var(--dsg-surface)}
      body[data-ds-dark-theme] .dsg{--dsg-surface:#12151d;--dsg-ink:#eef0f5;--dsg-muted:#a7afc0;--dsg-line:#343947;--dsg-soft:#1b202b;--dsg-accent:#8291ff}

      .dsg-hero{display:grid;grid-template-columns:repeat(4,minmax(190px,1fr));gap:12px;margin:0 auto 24px}.dsg-hero-card{position:relative;overflow:hidden;min-height:128px;border:1px solid var(--line);border-radius:17px;padding:18px 20px;text-align:left;color:var(--dsg-ink);background:linear-gradient(120deg,color-mix(in srgb,var(--hero) 17%,var(--dsg-surface)),var(--dsg-surface));transition:transform .16s,border-color .16s}.dsg-hero-card:hover{transform:translateY(-2px);border-color:color-mix(in srgb,var(--hero) 55%,var(--line))}.dsg-hero-label{font-size:11px;color:var(--hero);font-weight:700;letter-spacing:.08em;text-transform:uppercase}.dsg-hero-title{font-size:19px;font-weight:700;margin-top:8px;position:relative;z-index:1}.dsg-hero-glyph{position:absolute;right:15px;bottom:-28px;font-size:116px;line-height:1;color:var(--hero);opacity:.13;font-weight:800;pointer-events:none}.dsg-sectionbar{display:flex;align-items:center;justify-content:space-between;gap:16px;margin:0 auto 14px}.dsg-sectionbar h2{font-size:19px;margin:0}.dsg-sort{display:flex;gap:3px;padding:3px;background:var(--soft);border-radius:11px}.dsg-sort button{border:0;border-radius:8px;background:transparent;color:var(--muted);padding:7px 12px}.dsg-sort button.on{background:var(--dsg-surface);color:var(--dsg-ink);box-shadow:0 1px 4px #00000012}.dsg-tools,.dsg-cats,.dsg-grid,.dsg-note,.dsg-sectionbar,.dsg-hero{width:100%}.dsg-tools{margin-bottom:14px}.dsg-cats{margin-bottom:20px}.dsg-grid{gap:16px}.dsg-card{min-height:204px;padding:18px}.dsg-card h2{font-size:16px}.dsg-desc{min-height:62px}.dsg-head{margin-bottom:20px}.dsg-note{margin-top:28px}@media(max-width:900px){.dsg-hero{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:560px){.dsg-hero{grid-template-columns:1fr 1fr;gap:8px}.dsg-hero-card{min-height:105px;padding:13px}.dsg-hero-title{font-size:15px}.dsg-hero-glyph{font-size:85px}.dsg-sectionbar h2{font-size:16px}.dsg-sort button{padding:6px 8px}}
      .dsg *{box-sizing:border-box}.dsg button,.dsg input{font:inherit}.dsg button{cursor:pointer}.dsg-head{display:flex;align-items:flex-start;justify-content:space-between;gap:18px;margin:0 auto 22px;max-width:none}.dsg-kicker{color:var(--accent);font-weight:700;letter-spacing:.08em;text-transform:uppercase;font-size:11px}.dsg h1{font-size:clamp(25px,4vw,34px);letter-spacing:-.035em;margin:5px 0 3px;line-height:1.2}.dsg-sub{color:var(--muted);margin:0}.dsg-lang{border:1px solid var(--line);background:var(--dsg-surface);color:var(--muted);padding:7px 11px;border-radius:10px}.dsg-tools{max-width:none;margin:0 auto 18px;display:flex;gap:12px;align-items:center}.dsg-search{flex:1;position:relative}.dsg-search input{width:100%;border:1px solid var(--line);border-radius:12px;background:var(--soft);padding:12px 14px 12px 42px;outline:none}.dsg-search input:focus{border-color:#9da9ff;box-shadow:0 0 0 3px color-mix(in srgb, var(--dsg-accent) 10%, transparent)}.dsg-mag{position:absolute;left:15px;top:10px;color:var(--dsg-muted);font-size:18px}.dsg-count{white-space:nowrap;color:var(--muted);font-size:13px}.dsg-cats{max-width:none;margin:0 auto 20px;display:flex;gap:8px;overflow:auto;padding:1px 1px 7px}.dsg-chip{border:1px solid var(--line);background:var(--dsg-surface);color:var(--dsg-muted);padding:7px 12px;border-radius:999px;white-space:nowrap}.dsg-chip:hover{border-color:#c4cbff}.dsg-chip.on{background:color-mix(in srgb, var(--dsg-accent) 11%, var(--dsg-surface));border-color:color-mix(in srgb, var(--dsg-accent) 18%, var(--dsg-surface));color:var(--dsg-accent);font-weight:650}.dsg-grid{max-width:none;margin:auto;display:grid;grid-template-columns:repeat(auto-fill,minmax(min(100%,350px),1fr));gap:13px}.dsg-card{border:1px solid var(--line);border-radius:15px;padding:16px;display:flex;flex-direction:column;min-height:190px;background:var(--dsg-surface);transition:box-shadow .15s,border-color .15s}.dsg-card:hover{border-color:#d5d9e7;box-shadow:0 7px 24px #1c23400b}.dsg-cardtop{display:flex;justify-content:space-between;gap:10px;align-items:flex-start}.dsg-card h2{font-size:15px;line-height:1.35;margin:0;overflow-wrap:anywhere}.dsg-owner{color:var(--muted);font-size:12px;margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dsg-type{background:var(--soft);border-radius:7px;color:var(--dsg-muted);font-size:10px;padding:4px 7px;white-space:nowrap}.dsg-desc{color:var(--dsg-muted);font-size:13px;line-height:1.55;margin:12px 0 15px;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden;min-height:60px}.dsg-cardfoot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px}.dsg-meta{display:flex;flex-wrap:wrap;gap:6px;min-width:0}.dsg-tag{font-size:11px;color:var(--dsg-muted);background:var(--dsg-soft);padding:3px 7px;border-radius:6px}.dsg-actions{display:flex;gap:7px;flex-shrink:0}.dsg-btn{border:1px solid var(--line);border-radius:9px;background:var(--dsg-surface);color:var(--dsg-ink);padding:7px 10px}.dsg-btn.primary{background:var(--accent);border-color:var(--accent);color:#fff;font-weight:650}.dsg-btn:disabled{opacity:.55;cursor:wait}.dsg-status{max-width:none;margin:60px auto;text-align:center;color:var(--muted);padding:20px}.dsg-status strong{display:block;color:var(--ink);font-size:17px;margin-bottom:5px}.dsg-spin{width:24px;height:24px;border:2px solid #e3e6f2;border-top-color:var(--accent);border-radius:50%;margin:0 auto 14px;animation:dsgturn .8s linear infinite}@keyframes dsgturn{to{transform:rotate(360deg)}}.dsg-pager{display:flex;justify-content:center;align-items:center;gap:12px;padding:24px;color:var(--muted)}.dsg-note{max-width:none;margin:24px auto 0;padding:13px 15px;border:1px solid var(--line);border-radius:12px;background:var(--dsg-soft);color:var(--dsg-muted);font-size:11px}.dsg-note a,.dsg-detail a{color:var(--dsg-accent);text-decoration:none}.dsg-overlay{position:fixed;inset:0;background:#10152270;display:grid;place-items:center;padding:18px;z-index:9999}.dsg-modal{background:var(--dsg-surface);border-radius:18px;max-width:620px;width:100%;max-height:85vh;overflow:auto;padding:22px;box-shadow:0 24px 80px #10152238}.dsg-modalhead{display:flex;align-items:flex-start;justify-content:space-between;gap:16px}.dsg-modal h2{font-size:21px;margin:3px 0}.dsg-x{border:0;background:transparent;color:var(--muted);font-size:22px}.dsg-detail{color:var(--dsw-alias-label-secondary, #535d70);white-space:pre-wrap;overflow-wrap:anywhere}.dsg-detailrow{border-top:1px solid var(--line);padding:12px 0}.dsg-detailrow small{display:block;color:var(--muted);margin-bottom:3px}.dsg-modalactions{display:flex;gap:8px;justify-content:flex-end;margin-top:18px}@media(max-width:560px){.dsg{padding:20px 14px}.dsg-count{display:none}.dsg-card{min-height:180px}.dsg-desc{min-height:auto}}
    `
    function App({ t, install }) {
      const [lang, setLang] = useState(() => (navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en')
      const [catalog, setCatalog] = useState(() => window.__DSHGET_CATALOG_CACHE__?.data || null)
      const [error, setError] = useState('')
      const [query, setQuery] = useState('')
      const [category, setCategory] = useState('')
      const [sort, setSort] = useState('catalog')
      const [page, setPage] = useState(0)
      const [selected, setSelected] = useState(null)
      const [installing, setInstalling] = useState('')
      const tx = text[lang]
      const pageSize = 24
      const load = React.useCallback(async ({ force = false } = {}) => {
        const key = '__DSHGET_CATALOG_CACHE__'
        const cached = window[key]
        if (cached?.data) setCatalog(cached.data)
        if (!force && cached?.data && Date.now() - cached.fetchedAt < 10 * 60 * 1000) return
        if (cached?.promise) {
          try { setCatalog(await cached.promise); setError('') } catch (cause) { setError(String(cause?.message || cause)) }
          return
        }
        setError('')
        if (!cached?.data) setCatalog(null)
        const entry = cached || { data: null, fetchedAt: 0, promise: null }
        entry.promise = (async () => {
          let lastError
          for (const url of [CATALOG, FALLBACK]) {
            try {
              const response = await fetch(url, { headers: { accept: 'application/json' }, cache: force ? 'reload' : 'default' })
              if (!response.ok) throw new Error(`HTTP ${response.status}`)
              const data = await response.json()
              if (data?.format !== 1 || !Array.isArray(data.plugins) || !data.metadata?.categories) throw new Error('Unsupported catalog format')
              entry.data = data
              entry.fetchedAt = Date.now()
              return data
            } catch (cause) { lastError = cause }
          }
          throw lastError || new Error('Catalog unavailable')
        })()
        window[key] = entry
        try { setCatalog(await entry.promise); setError('') }
        catch (cause) { setError(String(cause?.message || cause)) }
        finally { entry.promise = null }
      }, [])
      useEffect(() => { load() }, [load])
      const categories = useMemo(() => {
        const map = catalog?.metadata?.categories || {}
        return Object.entries(map).map(([id, value]) => ({ id, label: value?.title?.[lang] || value?.title?.en || id }))
      }, [catalog, lang])
      const heroIds = ['ui', 'workflow', 'model', 'tools']
      const heroColors = ['#6284ef', '#30a38b', '#9c73dc', '#e19a48']
      const featuredCategories = heroIds.map((id, index) => ({ ...categories.find(item => item.id === id), color: heroColors[index] })).filter(item => item.id)
      const filtered = useMemo(() => {
        const needle = query.trim().toLocaleLowerCase()
        return (catalog?.plugins || []).filter(plugin => {
          const inCategory = !category || plugin.metadata?.category === category
          if (!inCategory) return false
          if (!needle) return true
          const desc = plugin.description?.[lang] || plugin.description?.en || ''
          return [plugin.name, plugin.title, desc, plugin.repository?.url, ...(plugin.metadata?.keywords || [])].filter(Boolean).join(' ').toLocaleLowerCase().includes(needle)
        })
      }, [catalog, query, category, lang])
      const ordered = useMemo(() => sort === 'latest'
        ? [...filtered].sort((a, b) => (b.versions?.[0]?.publishTimestamp || 0) - (a.versions?.[0]?.publishTimestamp || 0))
        : filtered, [filtered, sort])
      const pageCount = Math.max(1, Math.ceil(ordered.length / pageSize))
      const visible = ordered.slice(page * pageSize, (page + 1) * pageSize)
      const doInstall = async plugin => {
        const version = plugin.versions?.[0]
        if (!version || version.source?.type !== 'npm' || typeof install !== 'function') return
        setInstalling(plugin.name)
        try {
          await install({ spec: `${plugin.name}@${version.version}`, title: plugin.title || plugin.name, version: version.version })
        } finally { setInstalling('') }
      }
      const categoryLabel = id => categories.find(item => item.id === id)?.label || id
      const sourceKind = plugin => plugin.versions?.[0]?.source?.type === 'npm' ? tx.npm : tx.github
      const link = (url, label) => h('a', { href: url, target: '_blank', rel: 'noopener noreferrer' }, label)
      const installControl = plugin => {
        const version = plugin.versions?.[0]
        if (version?.source?.type !== 'npm') return link(plugin.repository?.url || plugin.homepage || '#', tx.openSource)
        if (typeof install === 'function') return h('button', { className: 'dsg-btn primary', disabled: !!installing, onClick: () => doInstall(plugin) }, installing === plugin.name ? '…' : tx.install)
        return link(`https://www.npmjs.com/package/${encodeURIComponent(plugin.name)}`, tx.install)
      }
      const pluginCard = plugin => {
        const description = plugin.description?.[lang] || plugin.description?.en || tx.noDescription
        const version = plugin.versions?.[0]?.version
        return h('article', { className: 'dsg-card', key: plugin.name },
          h('div', { className: 'dsg-cardtop' }, h('div', { style: { minWidth: 0 } }, h('h2', null, plugin.title || plugin.name), h('div', { className: 'dsg-owner' }, plugin.name)), h('span', { className: 'dsg-type' }, sourceKind(plugin))),
          h('p', { className: 'dsg-desc' }, description),
          h('div', { className: 'dsg-cardfoot' },
            h('div', { className: 'dsg-meta' }, h('span', { className: 'dsg-tag' }, categoryLabel(plugin.metadata?.category || '')), version && h('span', { className: 'dsg-tag' }, `v${version}`)),
            h('div', { className: 'dsg-actions' }, h('button', { className: 'dsg-btn', onClick: () => setSelected(plugin) }, tx.details), installControl(plugin))))
      }
      return h('div', { className: 'dsg' },
        h('style', null, css),
        h('header', { className: 'dsg-head' }, h('div', null, h('div', { className: 'dsg-kicker' }, 'DSH GET · COMMUNITY PLUGINS'), h('h1', null, tx.title), h('p', { className: 'dsg-sub' }, tx.subtitle)), h('button', { className: 'dsg-lang', onClick: () => { setLang(lang === 'zh' ? 'en' : 'zh'); setPage(0) } }, lang === 'zh' ? 'EN' : '中文')),
        catalog && h(React.Fragment, null,
          h('section', { className: 'dsg-hero' }, ...featuredCategories.map((item, index) => h('button', { key: item.id, className: 'dsg-hero-card', style: { '--hero': item.color }, onClick: () => { setCategory(item.id); setPage(0) } }, h('div', { className: 'dsg-hero-label' }, tx.browse), h('div', { className: 'dsg-hero-title' }, item.label), h('span', { className: 'dsg-hero-glyph', 'aria-hidden': 'true' }, `0${index + 1}`)))),
          h('div', { className: 'dsg-sectionbar' }, h('h2', null, tx.browse), h('div', { className: 'dsg-sort' }, h('button', { className: sort === 'catalog' ? 'on' : '', onClick: () => { setSort('catalog'); setPage(0) } }, tx.order), h('button', { className: sort === 'latest' ? 'on' : '', onClick: () => { setSort('latest'); setPage(0) } }, tx.latest))),
          h('div', { className: 'dsg-tools' }, h('label', { className: 'dsg-search' }, h('span', { className: 'dsg-mag', 'aria-hidden': 'true' }, '⌕'), h('input', { value: query, placeholder: tx.search, onChange: event => { setQuery(event.target.value); setPage(0) }, 'aria-label': tx.search })), h('div', { className: 'dsg-count' }, tx.count(ordered.length)), h('button', { className: 'dsg-btn', onClick: () => load({ force: true }) }, tx.refresh)),
          h('nav', { className: 'dsg-cats', 'aria-label': tx.popular }, h('button', { className: `dsg-chip ${category === '' ? 'on' : ''}`, onClick: () => { setCategory(''); setPage(0) } }, tx.all), ...categories.map(item => h('button', { key: item.id, className: `dsg-chip ${category === item.id ? 'on' : ''}`, onClick: () => { setCategory(item.id); setPage(0) } }, item.label))),
          visible.length ? h('main', { className: 'dsg-grid' }, ...visible.map(pluginCard)) : h('div', { className: 'dsg-status' }, h('strong', null, tx.empty), h('span', null, tx.emptyHint)),
          ordered.length > pageSize && h('div', { className: 'dsg-pager' }, h('button', { className: 'dsg-btn', disabled: page === 0, onClick: () => setPage(page - 1) }, '‹'), h('span', null, `${page + 1} / ${pageCount}`), h('button', { className: 'dsg-btn', disabled: page + 1 >= pageCount, onClick: () => setPage(page + 1) }, '›')),
          h('footer', { className: 'dsg-note' }, tx.attribution, ' ', link('https://awesome-dsh-plugin.com', tx.openSource))),
        !catalog && !error && h('div', { className: 'dsg-status' }, h('div', { className: 'dsg-spin' }), h('strong', null, tx.loading), h('span', null, tx.loadingHint)),
        !catalog && !!error && h('div', { className: 'dsg-status' }, h('strong', null, tx.error), h('p', null, tx.errorHint), h('button', { className: 'dsg-btn primary', onClick: () => load({ force: true }) }, tx.retry)),
        selected && h('div', { className: 'dsg-overlay', role: 'presentation', onMouseDown: event => { if (event.target === event.currentTarget) setSelected(null) } }, h('section', { className: 'dsg-modal', role: 'dialog', 'aria-modal': 'true', 'aria-label': selected.title || selected.name },
          h('div', { className: 'dsg-modalhead' }, h('div', null, h('div', { className: 'dsg-owner' }, selected.name), h('h2', null, selected.title || selected.name)), h('button', { className: 'dsg-x', onClick: () => setSelected(null), 'aria-label': tx.close }, '×')),
          h('p', { className: 'dsg-detail' }, selected.description?.[lang] || selected.description?.en || tx.noDescription),
          h('div', { className: 'dsg-detailrow' }, h('small', null, tx.author), link(selected.repository?.url || selected.homepage || '#', selected.repository?.url || selected.homepage || selected.name)),
          h('div', { className: 'dsg-detailrow' }, h('small', null, tx.version), selected.versions?.[0]?.version || '—'),
          h('div', { className: 'dsg-detailrow' }, h('small', null, tx.kind), sourceKind(selected)),
          h('div', { className: 'dsg-modalactions' }, h('button', { className: 'dsg-btn', onClick: () => setSelected(null) }, tx.close), installControl(selected))))
      )
    }
    return {
      name: 'dshget',
      inject: ['slots'],
      apply(ctx) {
        for (const slot of ['plugins.tab', 'settings.plugins.tab']) {
          ctx.slots.inject(slot, () => ctx.slots.register({
            name: slot,
            id: 'dshget',
            order: -99,
            label: 'DSH Get',
          }, props => h(App, { install: props?.install })))
        }
      },
    }
  },
})
