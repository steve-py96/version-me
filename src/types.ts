export interface Params {
  /**
   * the provided version
   */
  version: string
}

export interface Options {
  /**
   * the exported file path & name
   * ; default: ./version.json
   */
  file?: string
  /**
   * a callback to define custom content inside the file
   * ; default content: {version: ...} / <version>...</version>
   */
  customContent?: (params: Params) => string
  /**
   * exit after creating the version file?
   * ; default: false
   */
  exitAfterCreating?: boolean
}

export type VersionMe = (opts: Options) => void
export type VersionMeFormatter = (opts: Params) => string
