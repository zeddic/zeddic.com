<script>
  import Thumbnail from '$lib/components/lightbox/thumbnail.svelte';
</script>

<section class="prose">
  <h1>Projects</h1>

  <h2>Personal</h2>

  <section class="mb-16">
    <h3>Multiplayer Hide and Seek</h3>
    <p>
      I wanted to learn more about client-side state synchronization and client/server input
      reconciliation in multiplayer games. I
      <a href="https://github.com/zeddic/hide-and-seek" rel="noreferrer" target="_blank">
        created a prototype game of “Hide and Seek”</a
      > where the game simulation is run in parallel on both the client and server. The clients are allowed
      to optimistically apply updates in their local simulation to give greater responsiveness while
      the server simulation remains authoritative.
    </p>
    <img
      src="/images/projects/hide-and-seek.gif"
      alt="Screenshot of hide and seek game."
      class="rounded-xl"
    />
  </section>

  <section class="mb-16">
    <h3>FishPipes</h3>
    <p>
      FishPipes is a small easter-egg video game I included within a product at Google to celebrate
      April 1st. The game is modeled off of FlappyBird, but instead of a bird, you play a fish that
      must time jumps out of water to dodge obstacles. The game's purple pipes were themed off of
      the data pipeline product it was included in. Credit for the excellent game assets go to
      <a href="https://www.linkedin.com/in/kennycchen/">Kenny Chen</a>.
    </p>
    <img
      src="/images/projects/fish-pipes.gif"
      alt="Screenshot of FishPipes game."
      class="rounded-xl"
    />
  </section>

  <section class="mb-16">
    <h3>BugCraft</h3>
    <p>
      BugCraft is a quick 20% project I created at Google that would visualize your team's open bugs
      as a battle in StarCraft. Each open bug was represented by a Zerg unit with the bug priority
      determining the unit type. Each member of the team was represented by a Terran unit at the top
      of the screen which would gain levels by successfully closing bugs.
    </p>
    <img
      src="/images/projects/bug-craft.png"
      alt="Screenshot of FishPipes game."
      class="rounded-xl"
    />
  </section>

  <section class="mb-16">
    <h3>Google Rotations</h3>
    <p>
      Rotation's is a small tool I created at Google in my 20% time to help coordinate rotating
      responsibilities on teams. While it was started to simplify build cop rotations for engineers,
      it gained wide traction across the company and was used across many job functions including
      sales and product management. I maintained the product for many years before transferring
      ownership to a dedicated team at Google.
    </p>
    <img
      src="/images/projects/rotations.png"
      alt="Screenshot of the Rotations product."
      class="rounded-xl"
    />
  </section>

  <section class="mb-16">
    <h3>WebDKP</h3>
    <p>
      <a href="https://www.webdkp.com">WebDKP</a> is a free web service I created for players of the
      game World of Warcraft. At its height, it had over 500,000 active users. The site keeps track of
      user virtual currency called “DKP”, which was used by guilds to help distribute in game rewards.
      The site can often reduce tasks that used to take hours into a matter of minutes. It is integrated
      with World of Warcraft by means on an addon that users can download.
    </p>
    <div class="flex flex-wrap gap-2 justify-center md:justify-start ">
      <Thumbnail group="webdkp" src="/images/projects/webdkp/addon.jpg" alt="Photo of addon" />
      <Thumbnail group="webdkp" src="/images/projects/webdkp/addon2.jpg" alt="Photo of addon" />
      <Thumbnail group="webdkp" src="/images/projects/webdkp/awards.jpg" alt="Assigned awards" />
      <Thumbnail group="webdkp" src="/images/projects/webdkp/control.jpg" alt="DKP Control setup" />
      <Thumbnail group="webdkp" src="/images/projects/webdkp/manage.jpg" alt="DKP Management" />
      <Thumbnail group="webdkp" src="/images/projects/webdkp/table.jpg" alt="Website table" />
    </div>
  </section>

  <section>
    <h3>Intro to 2D Game Development Talk</h3>
    <p>
      I gave a TechTalk covering the
      <a
        href="https://docs.google.com/presentation/d/1uWUhfYk0tSrvmtmXOIMquOXGEh_2DREu1lqFEiIQ7rc/edit?usp=sharing"
      >
        basics of building 2D video games
      </a>
      . While most of the concepts are generic, code examples centered on building games in the browser.
    </p>
    <iframe
      title="game-talk"
      class="google-slides-iframe max-w-[680px]"
      frameBorder="0"
      src="https://docs.google.com/presentation/d/e/2PACX-1vRi8FVMonMEAuZZP0TIOOZVHjXnrxyU-KOiQmYSeMWc8KKaSPoVHz3ZKh6uOVi21oiwvPpuMY13Wx1g/embed?start=false&loop=false&delayms=60000"
      width="100%"
      height="410"
      allowFullScreen
    />
  </section>
</section>
