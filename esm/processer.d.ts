import { ProcesserOptions } from './types'
declare const defaultOptions: {
  img: {
    parameters: {
      auto: {
        format: boolean
      }
    }
    deviceSizes: number[]
    sizes: string
    enabled: boolean
    lazy: boolean
    placeholder: boolean
    provider: string
  }
  iframe: {
    enabled: boolean
    lazy: boolean
    provider: string
  }
  code: {
    enabled: boolean
    lib: string
  }
  otherElements: {}
}
export declare type MergedDefaultOptions = typeof defaultOptions &
  ProcesserOptions
declare const processer: (
  content: string,
  options?: ProcesserOptions
) => Promise<string>
export default processer
