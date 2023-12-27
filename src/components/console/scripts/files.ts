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
                <p>As of Fall 2023, I am a Computer Engineering sophomore at UW-Madison.</p>
                <p>
                  During my highschool years at Triam Udom Suksa, the whole world was
                  struck down with COVID-19.
                </p>
                <p>
                  There was a lot of free time, and I didn't want to spend all of them
                  on gaming.
                </p>
                <p>Incidentally, I found web development intriguing and tried my hand on it.</p>
                <p>The rest is history...</p>
                <p>Update Dec 2023: I got to try my hand on tons of other things, and now am interested in DevOps and Security.</p>
                `,
            },
            {
              name: 'internships',
              type: 'dir',
              content: [
                {
                  name: '2023-summer-agoda.txt',
                  type: 'text',
                  text: `
                    <p>I was accepted to Agoda's Summer Internship for Summer 2023 as a frontend/fullstack software engineer.</p>
                    <p>It was my first experience with an organization-level codebases and practices, which was immeasurably valuable.</p>
                    <p>The main technologies I used were React with Typescript and .NET with C#.</p>
                    <p>My role was to optimize some slower pages, which lead me to work with backend quite a lot too.</p>
                    <p>Some other technologies I got to experience were Gitlab, Grafana, GraphQL, Consul, and Docker.</p>
                  `,
                },
              ],
            },
            {
              name: 'projects',
              type: 'dir',
              content: [
                {
                  name: 'wip-grank.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/grank" class="text-sky-400 hover:underline">GRank</a> is a work-in-progress project I'm doing to learn about web development.
                  </p>
                  <p>It is a simple ranking platform for customized purposes.</p>
                  <p>I created it to learn more about Bun, monorepo and workspace, Next.js 13, Zod, and LibSQL with Turso.</p>
                  <p>I had to put it on hold since Bun was being clunky and had limited features on release.</p>
                  <p>It was fun learning lots of things at once, especially trying out monorepo and working with multiple packages.</p>
                  `,
                },
                {
                  name: 'wip-aoc.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/advent-of-code" class="text-sky-400 hover:underline">AoC</a> is my opinionated workstation for Advent of Code event.
                  </p>
                  <p>I made it to learn about Rust meta-programming and to practice my Rust skills.</p>
                  <p>The macro system can be used to avoid boilerplate code for maximum productivity.</p>
                  <p>Update Dec 2023: I am still doing AoC 2023, and is trying to work with multiple languages just for practice.</p>
                  `,
                },
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
                  name: 'submissions.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/submissions" class="text-sky-400 hover:underline">Submissions</a> is my history in competitive programming.
                  </p>
                  <p>I've already stepped away from competitive programming for a while</p>
                  <p>But it was a fun journey, and I'm glad I did it.</p>
                  <p>They were all in C++. And it still is my largest repo on GitHub.</p>
                    `,
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
                  name: 'hppr.txt',
                  type: 'text',
                  text: `<p>
                    <a href="https://github.com/ZikXewen/hppr" class="text-sky-400 hover:underline">HPPR</a> is a platformer game I made for educational purposes.
                  </p>
                  <p>I got to learn about graphics and physics in game developement.</p>
                  <p>It was mainly made with Rust and bevy.</p>
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
<a href="https://instagram.com/ss.data" class="hover:underline"><span class="text-sky-400">instagram </span>@ss.data</a>
<a href="https://facebook.com/supdata" class="hover:underline"><span class="text-sky-400">facebook  </span>Data Sup Srd</a>
<a href="https://x.com/ZXewen" class="hover:underline"><span class="text-sky-400">X         </span>@ZXewen</a></pre>`,
            },
          ],
        },
      ],
    },
  ],
}
