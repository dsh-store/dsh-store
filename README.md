# DSH Get

DSH Get is an independent visual directory for community plugins inside DeepSeek Harness. It reads the public Awesome DSH Plugin index and asks DSH's own plugin manager to handle installation and confirmation.

## Install

In DSH Desktop, open Plugins → Add plugin and enter:

```text
dshget
```

Restart DSH if the DSH Get tab does not appear immediately. The in-app install action requires a DSH version whose `plugins.tab` slot provides the host `install` callback; on older hosts the catalog remains browseable, while install is available through each entry's upstream npm or GitHub link.

## Catalog and licensing

The catalog is fetched from `dsh-plugin-catalog`, which publishes the same machine-readable directory as [awesome-dsh-plugin.com](https://awesome-dsh-plugin.com). DSH Get credits the catalog source and its CC0 1.0 dedication. Catalog permission applies to the directory data; it does not change the separate license or terms of each listed plugin. Inclusion is not a security review, compatibility guarantee, or endorsement.

The UI implementation in this repository is independently written. It does not copy source code from dsh-market.

## Features

- Search by package, author, description, repository, and keywords.
- Browse bilingual category labels and plugin descriptions.
- Inspect the upstream repository and published version.
- Send npm installs to DSH's native install flow, including its confirmation and progress UI.
- Follow DSH's light and dark page palette without depending on an optional theme service.
- Keep the catalog in memory between tab visits and refresh it every ten minutes; refresh is also available on demand.
- Fall back to the upstream index URL if jsDelivr cannot be reached.

## Project

- GitHub: https://github.com/dshget/dshget
- npm: https://www.npmjs.com/package/dshget
- Catalog attribution: https://github.com/awesome-dsh-plugin/awesome-dsh-plugin

DSH Get is an independent community project and is not affiliated with DeepSeek.
