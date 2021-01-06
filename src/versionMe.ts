import type { VersionMe, Params } from './types'
import { writeFile } from 'fs/promises'

export const versionMe: VersionMe = ({ file, customContent } = {}) => {
  const { npm_package_version: version, VERSION } = process.env

  if (!VERSION && !version)
    throw Error(
      'no version provided! either run via package manager or pass VERSION as env variable!'
    )

  const __version = VERSION || version

  writeFile(
    file || './version.json',
    (customContent || ((obj: Params) => JSON.stringify(obj)))({ version: __version! }),
    {
      encoding: 'utf-8',
    }
  )
    .then(() => {
      console.log(`[version exported]`)
      process.exit(0)
    })
    .catch((err) => {
      console.error(err)
      process.exit(1)
    })
}
