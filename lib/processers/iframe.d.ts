import { HTMLElement } from 'node-html-parser'
import { MergedDefaultOptions } from '../processer'
declare const iframeProcesser: (
  iframeElement: HTMLElement,
  options: MergedDefaultOptions
) => Promise<void>
export default iframeProcesser
