import { HTMLElement } from 'node-html-parser'
import { MergedDefaultOptions } from '../processer'
declare const imgProcesser: (
  imgElement: HTMLElement,
  options: MergedDefaultOptions
) => Promise<void>
export default imgProcesser
