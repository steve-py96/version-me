declare global {
  namespace VersionMeNS {
    interface Params {
      version: string
    }

    interface Options {
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
    }
  }

  type VersionMe = (opts: VersionMeNS.Options) => void

  namespace VersionMeFormatter {
    type xml = (opts: VersionMeNS.Params) => string
  }
}

export {}
