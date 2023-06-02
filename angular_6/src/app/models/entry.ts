export interface Entry {
  API: string
  Auth: string
  HTTPS: boolean
  Description: string
  Cors: string
  Link: string
  Category: string

}

export interface PageInfo<T> {
  count: number
  entries: T[]
}
