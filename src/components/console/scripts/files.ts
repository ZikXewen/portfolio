import type { Dir } from './types'

export const files: Dir = {
  name: '',
  type: 'dir',
  content: [
    {
      name: 'bin',
      type: 'dir',
      content: [
        {
          name: 'cat',
          type: 'cmd',
          usage: 'cat [file]',
          description: 'Display the contents of a file.',
        },
        {
          name: 'cd',
          type: 'cmd',
          usage: 'cd [dir]',
          description: 'Change the current directory.',
        },
        {
          name: 'clear',
          type: 'cmd',
          usage: 'clear',
          description: 'Clear the terminal.',
        },
        {
          name: 'exit',
          type: 'cmd',
          usage: 'exit',
          description: 'Terminate the terminal.',
        },
        {
          name: 'help',
          type: 'cmd',
          usage: 'help or help [command]',
          description: 'Provide help to all commands.',
        },
        {
          name: 'ls',
          type: 'cmd',
          usage: 'ls or ls [dir]',
          description:
            'Display a list of files and subdirectories in a directory.',
        },
      ],
    },
    {
      name: 'home',
      type: 'dir',
      content: [
        {
          name: 'guest',
          type: 'dir',
          content: [
            {
              name: 'about.txt',
              type: 'text',
              text: `
                <p>Hey, this is Data. You might've heard of me as ZikXewen.</p>
                <p>As of Spring 2023, I am a Computer Engineering freshman at UW-Madison.</p>
                <p>
                  During my highschool years at Triam Udom Suksa, the whole world was
                  struck down with COVID-19.
                </p>
                <p>
                  There was a lot of free time, and I didn't want to spend all of them
                  on gaming.
                </p>
                <p>Incidentally, I found web development intriguing and tried my hand on it.</p>
                <br />
                <p>The rest is history...</p>`,
            },
            {
              name: 'projects',
              type: 'dir',
              content: [
                {
                  name: 'portfolio.txt',
                  type: 'text',
                  text: '',
                },
              ],
            },
            {
              name: 'resume.txt',
              type: 'text',
              text: `<p>My resume can be accessed here: <a href="/resume">Resume</a></p>`,
            },
            {
              name: 'social.txt',
              type: 'text',
              text: `
                Links are clickable, hover over them to see the URL.
                <div class="decoration-sky-400 underline-offset-1 flex flex-col">
                    <a href="https://github.com/ZikXewen" class="hover:underline"><span class="text-sky-400">github    </span>ZikXewen</a>
                    <a href="https://www.instagram.com/ss.data" class="hover:underline"><span class="text-sky-400">instagram </span>@ss.data</a>
                    <a href="https://www.facebook.com/supdata" class="hover:underline"><span class="text-sky-400">facebook  </span>Data Sup Srd</a>
                    <a href="https://twitter.com/ZXewen" class="hover:underline"><span class="text-sky-400">twitter   </span>ZikXewen</a>
                </div>`,
            },
          ],
        },
      ],
    },
  ],
}
