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
              <li><NuxtLink to="/"><a href="#" class="nav-link">Home</a></NuxtLink></li>
              <template v-if="home">
              <li><a href="#about" class="nav-link" data-translatable="about">About</a></li>
              <li><a href="#experience" class="nav-link" data-translatable="experience">Experience</a></li>
              <li><a href="#portfolio" class="nav-link" data-translatable="works">Works</a></li>
              <li><a href="#contact" class="nav-link" data-translatable="contact">Contact</a></li>
            </template>
              <li><NuxtLink to="/blog"><a href="#" class="nav-link" data-translatable="contact">Blog</a></NuxtLink></li>
            </ul>
          </nav>
        </div>
        <div class="mt-5">
          <div class="switch-dark mb-5">
              <input type="checkbox" class="sr-only" id="darkmode-toggle" ref="darkModeToggle" @change="toggleDarkMode">
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

  <script lang="ts" setup>
  defineProps<{
    home:boolean
  }>()
  const darkModeToggle = ref(null);
    const isDarkMode = ref(process.client && localStorage.getItem('darkMode') === 'true');
    var htmlElement ; 
    var logoElement ;

    onBeforeMount(()=>{
      htmlElement = document.body.parentNode;
     logoElement = document.querySelector('#logo');
    })

    const enableDarkMode = () => {
      document.querySelectorAll('.btn-dark').forEach((el) => {
        el.classList.remove('btn-dark');
        el.classList.add('btn-light');
      });
      document.querySelectorAll('#links-social li a').forEach((el) => {
        el.classList.remove('text-dark');
        el.classList.add('text-light');
      });
      document.querySelectorAll('.animated').forEach((el) => {
        el.classList.add('bg-dark');
      });
      htmlElement?.setAttribute('data-bs-theme', 'dark');
      logoElement?.setAttribute('src','/images/light-logo.webp');
      localStorage.setItem('darkMode', 'true');
    };

    const disableDarkMode = () => {
      document.querySelectorAll('.btn-light').forEach((el) => {
        el.classList.remove('btn-light');
        el.classList.add('btn-dark');
      });
      document.querySelectorAll('#links-social li a').forEach((el) => {
        el.classList.remove('text-light');
        el.classList.add('text-dark');
      });
      htmlElement?.setAttribute('data-bs-theme', 'light');
      document.querySelectorAll('.animated').forEach((el) => {
        el.classList.remove('bg-dark');
      });
      logoElement?.setAttribute('src','/images/main-logo.webp');
      localStorage.setItem('darkMode', 'false');
    };



    onMounted(() => {
      if (isDarkMode.value) {
        enableDarkMode();
      }
      darkModeToggle.value = document.getElementById('darkmode-toggle');


    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;

    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav-link');
      applyListeners();
    };

      var applyListeners = function applyListeners() {
        menu.addEventListener('click', function () {
          return toggleClass(body, 'nav-active');
        });

        menuItems.forEach(element => {
          element.addEventListener('click', function () {
          if (body.classList.contains('nav-active')) element.classList.remove('nav-active');
         });

        });
      };

      var toggleClass = function toggleClass(element, stringClass) {
        if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
      };

    init();

    });

  const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
      if (isDarkMode.value) {
        enableDarkMode();
      } else {
        disableDarkMode();
      }
    };
  </script>