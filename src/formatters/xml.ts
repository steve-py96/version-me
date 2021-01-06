import type { VersionMeFormatter } from '../types'

export const xml: VersionMeFormatter = ({ version }) => `<version>${version}</version>`
