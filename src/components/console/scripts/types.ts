export type File = Txt | Dir | Cmd
export type Txt = {
  name: string
  type: 'text'
  text: string
}
export type Dir = {
  name: string
  type: 'dir'
  content: File[]
}
export type Cmd = {
  name: string
  type: 'cmd'
  usage: string
  description: string
}
