<script type="ts">
  import githubLogo from '/src/assets/github.svg';
  import gmailLogo from '/src/assets/gmail.svg';
  import linkedInLogo from '/src/assets/linkedin.svg';
  import youtubeLogo from '/src/assets/youtube.svg';
</script>

<article class="prose !max-w-none">
  <!-- <div class="bg-blue-100 rounded-full overflow-hidden w-[120px] not-prose mb-4">
    <img src="/src/assets/baileys-cartoon.png" alt="Scott Bailey" class="w-full" />
  </div> -->
  <div class="flex justify-between items-center gap-4">
    <div>
      <h1 class="!mb-2">About me</h1>
      <div class="flex flex-wrap flex-col md:flex-row gap-2 md:gap-8 quick-links not-prose">
        <a href="mailto:scott@zeddic.com">
          <img src={gmailLogo} alt="Mail icon" class="w-[24px]" />
          scott@zeddic.com
        </a>
        <a href="https://www.linkedin.com/in/scott-bailey-z/" target="_blank" rel="noreferrer">
          <img src={linkedInLogo} alt="LinkedIn Icon" class="w-[24px]" />
          LinkedIn
        </a>

        <a href="https://github.com/zeddic" target="_blank" rel="noreferrer">
          <img src={githubLogo} alt="GitHub Icon" class="w-[24px]" />
          GitHub
        </a>

        <a
          href="https://www.youtube.com/channel/UCl2bo53O_QIR9gVydSGzZTg"
          target="_blank"
          rel="noreferrer"
        >
          <img src={youtubeLogo} alt="YouTube Icon" class="w-[24px]" />
          YouTube
        </a>
      </div>
    </div>
  </div>

  <section class="mb-4">
    <p>
      I'm a staff software engineer who love's to build. I'm currently working at <a href="https://figma.com">Figma</a> on 
      <a href="https://help.figma.com/hc/en-us/sections/23536356509975-Build-design-systems">Design Systems</a>.
      Previously I've worked at <a href="https://google.com">Google</a> and <a href="https://www.usa.canon.com/">Canon USA R&D</a>.
    </p>

    <p>
      While at Google I worked on frontends you might have used, such as
      <a href="https://analytics.google.com/">Analytics</a> and
      <a href="https://ads.google.com/">AdWords</a>.
    </p>
  </section>

  <section class="mb-4">
    <h2>Experience</h2>
    
    <section class="employer">
      <div class="employer-ribbon !bg-[#a259ff]" />
      <div>
        <img src="/images/figma-logo.svg" width="40" alt="Figma Logo" class="my-2" />

        <section class="job">
          <h3>Figma</h3>
          <div class="job-subtitle">
            <div class="rank">Staff Software Engineer</div>
            <div class="years">2023-Present</div>
          </div>
          <ul>
            <li>Helping build Design Systems and Design System Analytics</li> 
          </ul>
        </section>
      </div>
    </section>

    <section class="employer">
      <div class="employer-ribbon !bg-[#4E878E]" />
      <div>
        <img src="/images/closefactor-logo.svg" width="180" alt="CloseFactor Logo" class="my-2" />

        <section class="job">
          <h3>CloseFactor</h3>
          <div class="job-subtitle">
            <div class="rank">Staff Software Engineer</div>
            <div class="years">2021-2023</div>
          </div>
          <ul>
            <li>Eearly employee building out the core product</li> 
          </ul>
        </section>
      </div>
    </section>

    <section class="employer">
      <div class="employer-ribbon" />
      <div>
        <img src="/images/google-logo.svg" width="180" alt="Google Logo" class="my-2" />

        <section class="job">
          <h3>Internal Data Analytics Suite</h3>
          <div class="job-subtitle">
            <div class="rank">Staff Software Engineer</div>
            <div class="years">2016-2021</div>
          </div>
          <ul>
            <li>Tech lead & manager of a 4 person team building data analytics frontends</li>
            <li>
              Built an application for creating and monitoring ETL data pipelines using a rich graph
              based editor
              <ul>
                <li>Product responsible for running over XXX,000 weekly pipelines</li>
                <li>Increased frontend usage by 55% over a 1 year period</li>
              </ul>
            </li>
            <li>Worked cross-site to build a streaming pipeline monitoring UI</li>
            <li>Created common frontend infrastructure used across Google</li>
          </ul>
        </section>

        <section class="job">
          <h3>Google Analytics</h3>
          <div class="job-subtitle">
            <div class="rank">Senior Software Engineer</div>
            <div class="years">2012-2016</div>
          </div>
          <ul>
            <li>
              Designed and launched the project to migrate Analytics to Angular
              <ul>
                <li>
                  Lead team of 4, later coordinating work of 11 engineers at peak of migration
                </li>
                <li>Conducted design, security, privacy, and legal reviews</li>
                <li>Designed process that allowed for seamless, incremental migration</li>
              </ul>
            </li>
            <li>Lead a team of 3 to develop a common, accessible, frontend component library</li>
            <li>Lead a team of 3 to develop Analytics 360 Suite user management features</li>
            <li>Developed multiple features within the Analytics management UI</li>
          </ul>
        </section>

        <section class="job">
          <h3>AdWords Keyword Tool</h3>
          <div class="job-subtitle">
            <div class="rank">Software Engineer</div>
            <div class="years">2008-2012</div>
          </div>
          <ul>
            <li>Helped develop and release a new version of the Keyword Tool</li>
            <li>
              Developed multiple features including user preferences, improved search, and improved
              table performance
            </li>
            <li>Developed suite a webdriver tests for automated frontend testing</li>
            <li>Member of production on call rotation</li>
            <li>Prepared training material and taught classes on GWT</li>
          </ul>
        </section>
      </div>
    </section>

    <section class="employer">
      <div class="employer-ribbon !bg-[#CC0000]" />
      <div>
        <img src="/images/canon-logo.svg" width="180" alt="Canon Logo" class="my-2" />

        <section class="job">
          <h3>Canon Development Americas</h3>
          <div class="job-subtitle">
            <div class="rank">Software Engineer</div>
            <div class="years">2006-2008</div>
          </div>
          <ul>
            <li>
              Conducted research and development to create new technologies for future Canon
              products
            </li>
            <li>Helped develop early versions of Canon’s support for Web Services on Devices</li>

            <li>
              Developed exploratory software and a smart remote for a potential brand of Canon TVs
            </li>
            <li>Traveled to Canon Headquarters in Tokyo to showcase division’s latest work</li>
            <li>Published 2 patents</li>
          </ul>
        </section>
      </div>
    </section>
  </section>

  <section class="mb-8">
    <header>
      <h2>Education</h2>
    </header>
    <div class="school">
      <div class="school-title">University of Southern California</div>
      <div class="school-degree">Masters in Business Administration</div>
    </div>
    <div class="school">
      <div class="school-title">University of California, Irvine</div>
      <div class="school-degree">Bachelors in Computer Science</div>
    </div>
  </section>
</article>

<style lang="scss">
  @use '/src/styles/typography-mixins.scss';

  .quick-links {
    a {
      display: inline-flex;
      gap: 8px;
      align-items: center;
    }
  }

  .employer {
    display: flex;
    margin-bottom: 32px;
    @apply gap-4 md:gap-8;

    &-ribbon {
      background: #4285f4;
      border-radius: 4px;
      width: 8px;
      overflow: hidden;
      color: #fff;
      position: relative;
      flex: 0 0 auto;
    }
  }

  .job {
    h3 {
      margin-bottom: 0px;
    }

    &-subtitle {
      @include typography-mixins.text-label();
      @apply text-text-secondary;
      margin-bottom: 4px;
    }

    .years {
      @include typography-mixins.text-label();
      @apply text-text-secondary;
    }
  }

  .school {
    margin-bottom: 32px;

    &-title {
      @include typography-mixins.text-h4();
    }

    &-degree {
      @include typography-mixins.text-label();
      @apply text-text-secondary;
    }
  }
</style>
