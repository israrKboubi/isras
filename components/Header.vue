   <template>
      <a class="menu-btn"><span></span></a>
    <header id="header-nav" class="col-lg-2 position-fixed px-5 h-100">
      <div class="header-wrap d-flex flex-column justify-content-between h-100">
        <div class="navigation">
          <div class="site-logo mt-5">
            <a href="index.html">
              <img id="logo" src="public/images/main-logo.webp" alt="logo" class="img-fluid">
            </a>
          </div>

          <nav id="one-page-menu" class="vertical-menu my-5">
            <ul class="menu-list list-unstyled">
              <li><a href="#home" class="nav-link" data-translatable="home">Home</a></li>
              <li><a href="#about" class="nav-link" data-translatable="about">About</a></li>
              <li><a href="#experience" class="nav-link" data-translatable="experience">Experience</a></li>
              <li><a href="#portfolio" class="nav-link" data-translatable="works">Works</a></li>
              <li><a href="#contact" class="nav-link" data-translatable="contact">Contact</a></li>
              <li><a href="/blog" class="nav-link" data-translatable="contact">Blog</a></li>
            </ul>
          </nav>
        </div>
        <div class="mt-5">
        <div class="switch-dark mb-5">
          <input type="checkbox" class="sr-only" id="darkmode-toggle">
          <label for="darkmode-toggle" class="toggle">
            <span>Toggle dark mode</span>
          </label>
        </div>
          <a class="lang" onclick="changeLang('en')">English</a><br>
          <a class="lang" onclick="changeLang('fr')">Français</a><br>
          <a class="lang" onclick="changeLang('ar')">العربية</a><br>
          <div class="email-links">
            <a href="mailto:Kboubi.israr@gmail.com" class="py-3 my-3 border-bottom d-flex">Kboubi.israr@gmail.com</a>
          </div>
          <ul id="links-social" class="list-unstyled d-flex justify-content-start flex-wrap gap-3">
            <li>
              <a href="www.facebook.com" class="text-dark">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlink:href="#facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/israrkboubi" class="text-dark">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlink:href="#twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCfKbNt4d-JHFPgZ5-xQy_9g" class="text-dark">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlink:href="#youtube"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.fr/ikboubi/" class="text-dark">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlink:href="#pinterest"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/israr_kboubi/" class="text-dark">
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <use xlink:href="#instagram"></use>
                </svg>
              </a>
            </li>
          </ul>
          <div class="py-4 border-top">
            <p>Israr Kboubi 2024</p>
          </div>
        </div>
      </div>
    </header>
  </template>