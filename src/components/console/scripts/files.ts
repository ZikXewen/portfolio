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
                <p>The rest is history...</p>`,
            },
            {
              name: 'projects',
              type: 'dir',
              content: [
                {
                  name: 'pdb.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/pay-discord-bot" class="text-sky-400 hover:underline">PDB</a> is my Discord bot for my group of friends.
                  </p>
                  <p>It was my first project with Typescript, made with Node.js and Discord.js.</p>
                  <p>Some functionality also utilizes MongoDB and Next.js</p>
                  `,
                },
                {
                  name: 'chckrs.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/chckrs" class="text-sky-400 hover:underline">Chckrs</a> is a multiplayer checkers game I made for educational purposes.
                  </p>
                  <p>I made it to learn about websockets and concurrent programming with Rust.</p>
                  <p>Its frontend was made with Solid.js, and its backend was made with Warp.rs.</p>
                  `,
                },
                {
                  name: 'astrogames.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://astro-games.vercel.app/" class="text-sky-400 hover:underline">Astro Games</a> is a mini-game collection I made to practice my dev skills.
                  </p>
                  <p>It was purposely complicated to make me learn more about web development.</p>
                  <p>It used Preact, Svelte, Vanilla JS, Tailwind, and Rust WebAssembly combined together by Astro.</p>
                    `,
                },
                {
                  name: 'aoc.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/advent-of-code" class="text-sky-400 hover:underline">AoC</a> is my opinionated workstation for Advent of Code event.
                  </p>
                  <p>I made it to learn about Rust meta-programming and to practice my Rust skills.</p>
                  <p>The macro system can be used to avoid boilerplate code for maximum productivity.</p>
                  `,
                },
                {
                  name: 'mcspotify.txt',
                  type: 'text',
                  text: `<p>
                    MCSpotify is a Minecraft mod I made to control Spotify from within the game.
                    </p>
                    <p>I was learning Java and Kotlin at the time, so I made this to practice.</p>
                    <p>It was made with Kotlin in both
                    <a href="https://github.com/ZikXewen/spotify-mod-forge" class="text-sky-400 hover:underline">Forge</a>
                    and
                    <a href="https://github.com/ZikXewen/spotify-mod-fabric" class="text-sky-400 hover:underline">Fabric</a>
                    versions.</p>`,
                },
                {
                  name: 'kratua.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/Kratua" class="text-sky-400 hover:underline">Kratua</a> is a machine learning + web development project I
                    did in highschool.
                  </p>
                  <p>It was my first big project, and you can read more about it <a href="https://medium.com/@datasup12/my-bizarre-first-project-cac4a5023be2" class="text-sky-400 hover:underline">HERE</a>.</p>
                  <p>The actual site is probably down from inactivity, but you can still check out the code.</p>
                  <p>It was made with the MERN stack. With a self-trained PyTorch model hosted with Flask.</p>
                  `,
                },
                {
                  name: 'shoutout.txt',
                  type: 'text',
                  text: `<p>
                    <a href="http://github.com/ZikXewen/Shoutout" class="text-sky-400 hover:underline">Shoutout</a> is a social media platform I made for my highschool community.
                  </p>
                  <p>The site is down since my contract expired, but the code is still up.</p>
                  <p>It was made with the MERN stack.</p>
                  `,
                },
              ],
            },
            {
              name: 'resume.txt',
              type: 'text',
              text: `<p>
                My resume can be accessed
                <a href="/resume" class="text-sky-400 hover:underline">here</a>.
              </p>`,
            },
            {
              name: 'social.txt',
              type: 'text',
              text: `
                <p>Links are clickable, hover over them to see the URL.</p>
                <pre class="decoration-sky-400">
<a href="https://github.com/ZikXewen" class="hover:underline"><span class="text-sky-400">github    </span>ZikXewen</a>
<a href="https://www.instagram.com/ss.data" class="hover:underline"><span class="text-sky-400">instagram </span>@ss.data</a>
<a href="https://www.facebook.com/supdata" class="hover:underline"><span class="text-sky-400">facebook  </span>Data Sup Srd</a>
<a href="https://twitter.com/ZXewen" class="hover:underline"><span class="text-sky-400">twitter   </span>ZikXewen</a>
</pre>`,
            },
          ],
        },
      ],
    },
  ],
}
