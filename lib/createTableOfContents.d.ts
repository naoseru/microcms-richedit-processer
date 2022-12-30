import type { CreateTableOfContentsOptions } from './types'
declare function createTableOfContents(
  content: string,
  options?: CreateTableOfContentsOptions
): {
  id: string
  text: string
  name: string
}[]
declare function createTableOfContents(
  content: string,
  options: CreateTableOfContentsOptions & {
    dataForName: false
  }
): {
  id: string
  text: string
}[]
export default createTableOfContents
