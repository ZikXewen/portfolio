import { files } from './files'
import type { Cmd, Dir, File } from './types'

const root = document.getElementById('root') as HTMLDivElement
const input = document.getElementById('input') as HTMLInputElement
const commands = document.getElementById('commands') as HTMLDivElement
const prompt = document.getElementById('prompt') as HTMLDivElement

const commandList = (files.content[0] as Dir).content as Cmd[]

const homeStack = [
  files,
  files.content[1],
  (files.content[1] as Dir).content[0],
]
let dirStack = [...homeStack]

let command = ''
input.addEventListener('keydown', async (e) => {
  if (e.key === 'Tab') {
    e.preventDefault()
    const [cmd, path] = input.value.split(' ')
    const auto = autoComplete(path)
    if (auto) input.value = `${cmd} ${auto}`
    return
  }
  matches = []
  currentMatch = 0
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    input.value = command
  }
  if (e.key === 'Enter') {
    e.preventDefault()
    command = input.value.trim()
    const [cmd, ...args] = command.split(' ')
    input.value = ''

    const newCommand = document.createElement('div')
    newCommand.classList.add('flex')
    newCommand.innerHTML = generatePrompt() + command
    commands.appendChild(newCommand)

    execute(cmd, args)

    prompt.innerHTML = generatePrompt()
    root.scrollTop = root.scrollHeight
  }
})

let matches: string[] = []
let currentMatch = 0
function autoComplete(path: string): string | undefined {
  if (matches.length) {
    currentMatch++
    if (currentMatch === matches.length) currentMatch = 0
    return matches[currentMatch]
  }
  const dir = path.split('/')
  const fd = dir.pop() || ''
  const dirPath = (dir.join('/') || (path.startsWith('/') ? '' : '.')) + '/'
  const stk = parsePath(dirPath)
  if (!stk) return
  const cur = stk[stk.length - 1]
  if (cur.type !== 'dir') return
  matches = cur.content
    .filter((file) => file.name.startsWith(fd))
    .map((file) => dirPath + file.name)
  if (matches.length) return matches[0]
  return
}

function generatePrompt(): string {
  let path = dirStack.map((file) => file.name).join('/') || '/'
  if (path.startsWith('/home/guest')) path = '~' + path.slice(11)
  return `
    <p class="mr-2">
      <span class="text-emerald-400">guest@terminal</span>:<span class="text-sky-400">${path}</span>$
    </p>
  `
}

function parsePath(spath: string): File[] | null {
  const path = spath.split('/')
  let cur
  if (path[0] === '~') {
    path.shift()
    cur = [...homeStack]
  } else if (path[0] === '') {
    path.shift()
    cur = [files]
  } else if (path[0] === '.') {
    path.shift()
    cur = [...dirStack]
  } else cur = [...dirStack]
  if (path[path.length - 1] === '') path.pop()
  for (const p of path) {
    if (p === '..') cur.pop()
    else {
      let prev = cur[cur.length - 1]
      if (prev.type !== 'dir') return null
      const next = prev.content.find((file) => file.name === p)
      if (!next) return null
      cur.push(next)
    }
  }
  return cur
}

function respond(response: string): void {
  const res = document.createElement('div')
  res.innerHTML = response
  commands.appendChild(res)
}

function getColor(type: File['type']): string {
  switch (type) {
    case 'dir':
      return 'text-sky-400'
    case 'cmd':
      return 'text-emerald-400'
    case 'text':
      return 'text-sky-100'
    default:
      return ''
  }
}

function execute(cmd: string, args: string[]): void {
  switch (cmd) {
    case 'clear':
    case 'cls':
      commands.innerHTML = ''
      break
    case 'exit':
      respond('Terminated... Redirecting to home page...')
      prompt.style.display = 'none'
      input.style.display = 'none'
      setTimeout(() => {
        window.location.href = '/'
      }, 2000)
      break
    case 'help': {
      const cmd = args[0]
      if (!cmd)
        respond(`
        <p>
          For more information on a specific command, type
          <span class="text-sky-400">'help [command]'</span>.
        </p>
        ${commandList
          .map((file) => {
            return `<pre><span class="text-sky-400">${file.name.padEnd(
              8,
            )}</span>${file.description}</pre>`
          })
          .join('\n')}
        `)
      else {
        const command = commandList.find((file) => file.name === cmd)
        if (!command) respond(`<p>help: '${cmd}': command not found</p>`)
        else respond(`<p>${command.usage} - ${command.description}</p>`)
      }
      break
    }
    case 'dir':
    case 'ls': {
      const path = args[0]
      const stk = parsePath(path || '.')
      if (!stk) {
        respond(`<p>ls: cannot access '${path}': No such file or directory</p>`)
        break
      }
      const dir = stk[stk.length - 1]
      if (dir.type !== 'dir') {
        respond(`<p>ls: cannot access '${path}': Not a directory</p>`)
        break
      }
      respond(
        dir.content
          .map((file) => {
            return `<p class="${getColor(file.type)}">${file.name}</p>`
          })
          .join('\n'),
      )
      break
    }
    case 'cd': {
      const path = args[0]
      const stk = parsePath(path || '.')
      if (!stk) {
        respond(`<p>cd: cannot access '${path}': No such file or directory</p>`)
        break
      }
      const dir = stk[stk.length - 1]
      if (dir.type !== 'dir') {
        respond(`<p>cd: cannot access '${path}': Not a directory</p>`)
        break
      }
      dirStack = stk
      break
    }
    case 'cat': {
      const path = args[0]
      const stk = parsePath(path || '.')
      if (!stk) {
        respond(
          `<p>cat: cannot access '${path}': No such file or directory</p>`,
        )
        break
      }
      const file = stk[stk.length - 1]
      if (file.type !== 'text') {
        respond(`<p>cat: cannot access '${path}': Not a text file</p>`)
        break
      }
      respond(file.text)
      break
    }
    default:
      respond(`<p>${cmd}: command not found</p>`)
      break
  }
}

export {}
