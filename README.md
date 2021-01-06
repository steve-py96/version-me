![GitHub package.json version](https://img.shields.io/github/package-json/v/steve-py96/version-me?style=flat-square&color=000000)

# version-me

some cheap dev-only lib to avoid manual updates of the version in multiple files (f.e. `version.json`/`version.xml` besides `package.json`)

# where to use it?

the bundler config / somewhen else before any further pipelines

# how to use

```js
import { versionMe, xml } from 'versionMe'

versionMe()
// or
versionMe({ file: './dist/build-version.json' })
// or
versionMe({ customContent: ({ version }) => JSON.stringify({ CUSTOM_VERSION_KEY: version }) })
// or
versionMe({ file: './version.xml', customContent: (param) => xml(param) })
// or or or
```

### environment variables it looks for

you must either provide the `npm_package_version` (provided by default if using a package manager to start the script) or `VERSION` by hand <br />
=> `VERSION whatever.js` or `yarn whatever` (script in package.json which runs whatever.js somehow)

## configurations

| key           | default value                                | description                               |
| ------------- | -------------------------------------------- | ----------------------------------------- |
| file          | './version.json'                             | sets the file path & name                 |
| customContent | ({ version }) => JSON.stringify({ version }) | adds the ability for custom file contents |

## provided formatters

- json (`{"version": "..."}`) (default)
- xml (`<version>...</version>`)
