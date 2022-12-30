import { HTMLElement } from 'node-html-parser'
import { MergedDefaultOptions } from '../../processer'
declare const codeProcesser: (
  codeElement: HTMLElement,
  options: MergedDefaultOptions
) => Promise<void>
export default codeProcesser
