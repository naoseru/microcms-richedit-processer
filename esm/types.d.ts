/// <reference types="react" />
import { QueryParamsInput } from 'ts-imgix'
declare type CommonOptinos = {
  enabled?: boolean
  addClassName?: string[]
  addAttributes?: Record<string, string>
}
declare type ImgOptions = CommonOptinos & {
  parameters?: QueryParamsInput
  deviceSizes?: number[]
  sizes?: string
} & (
    | {
        lazy?: false
      }
    | {
        lazy?: true
        placeholder?: boolean
        provider?: 'lazysizes'
      }
  )
declare type IframeOptions = CommonOptinos & {
  width?: number
  height?: number
} & (
    | {
        lazy?: false
      }
    | {
        lazy?: true
        provider?: 'lazysizes'
      }
  )
declare type CodeOptions = CommonOptinos & {
  lib?: 'highlight.js'
}
export declare type OtherElementsOptions = Pick<
  CommonOptinos,
  'addAttributes' | 'addClassName'
>
export declare type ProcesserOptions = {
  img?: ImgOptions
  iframe?: IframeOptions
  code?: CodeOptions
  otherElements?: Partial<
    Record<keyof JSX.IntrinsicElements, OtherElementsOptions>
  >
}
export declare type CreateTableOfContentsOptions = {
  tags?: string
  dataForName?: 'tagName' | false
}
export {}
