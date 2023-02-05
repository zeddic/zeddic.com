<script>
  import Thumbnail from '$lib/components/lightbox/thumbnail.svelte';
</script>

<section class="prose">
  <h1>Projects</h1>

  <h2>Personal</h2>

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

  <h3>Introduction to 2D Game Development</h3>
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
