(function ($) {

  "use strict";

  // ------------------------------------------------------------------------------ //
  // Overlay Menu Navigation
  // ------------------------------------------------------------------------------ //
  var overlayMenu = function () {

    if (!$('.nav-overlay').length) {
      return false;
    }

    var body = undefined;
    var menu = undefined;
    var menuItems = undefined;
    var init = function init() {
      body = document.querySelector('body');
      menu = document.querySelector('.menu-btn');
      menuItems = document.querySelectorAll('.nav__list-item');
      applyListeners();
    };
    var applyListeners = function applyListeners() {
      menu.addEventListener('click', function () {
        return toggleClass(body, 'nav-active');
      });
    };
    var toggleClass = function toggleClass(element, stringClass) {
      if (element.classList.contains(stringClass)) element.classList.remove(stringClass); else element.classList.add(stringClass);
    };
    init();
  }


  // Portfolio Slider
  var swiper = new Swiper("#cert-Swiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  //port
  var swiper = new Swiper("#portfolio-Swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    grid:{
      fill:'row',
      rows:2
    },
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 1,
        grid:{
          fill:'row',
          rows:2
        },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
        grid:{
          fill:'row',
          rows:2
        },
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
        grid:{
          fill:'row',
          rows:2
        },
      },
    },
  });

  // Animate Texts
  var initTextFx = function () {
    $('.txt-fx').each(function () {
      var newstr = '';
      var count = 0;
      var delay = 100;
      var stagger = 10;
      var words = this.textContent.split(/\s/);
      var arrWords = new Array();
      
      $.each( words, function( key, value ) {
        newstr = '<span class="word">';

        for ( var i = 0, l = value.length; i < l; i++ ) {
          newstr += "<span class='letter' style='transition-delay:"+ ( delay + stagger * count ) +"ms;'>"+ value[ i ] +"</span>";
          count++;
        }
        newstr += '</span>';

        arrWords.push(newstr);
        count++;
      });

      this.innerHTML = arrWords.join("<span class='letter' style='transition-delay:"+ delay +"ms;'>&nbsp;</span>");
    });
  }

  // init Isotope
  var initIsotope = function() {
    
    $('.grid').each(function(){

      // $('.grid').imagesLoaded( function() {
        // images have loaded
        var $buttonGroup = $( '.button-group' );
        var $checked = $buttonGroup.find('.is-checked');
        var filterValue = $checked.attr('data-filter');
  
        var $grid = $('.grid').isotope({
          itemSelector: '.portfolio-item',
          // layoutMode: 'fitRows',
          filter: filterValue
        });
    
        // bind filter button click
        $('.button-group').on( 'click', 'a', function(e) {
          e.preventDefault();
          filterValue = $( this ).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
    
        // change is-checked class on buttons
        $('.button-group').each( function( i, buttonGroup ) {
          $buttonGroup.on( 'click', 'a', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
          });
        });
      // });

    });
  }

  // init Chocolat light box
  var initChocolat = function() {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  $(document).ready(function () {

    overlayMenu();
    initTextFx();
    initChocolat();

    // mobile menu
    $('.menu-btn').click(function(e){
      e.preventDefault();
      $('body').toggleClass('nav-active');
    });

    AOS.init({
      duration: 1200,
      // once: true,
    })

    var swiper = new Swiper(".mySwiper", {
      grabCursor: true,
      effect: "creative",
      autoplay: {
        delay: 3000,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: [0, 0, -200],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });

  });



  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
    initIsotope();
  })


  const darkModeToggle = $('#darkmode-toggle');
  const htmlElement = $('html');
  const logoElement = $('#logo');
  const isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Set initial dark mode state
  if (isDarkMode) {
       enableDarkMode();
  }

  // Toggle between dark and light mode
  darkModeToggle.on('click', function () {
      if (htmlElement.attr('data-bs-theme') === 'dark') {
          disableDarkMode();
      } else {
          enableDarkMode();
      }
  });

  function enableDarkMode() {
      $('.btn-dark').removeClass('btn-dark').addClass('btn-light');
      $('#links-social li a').removeClass('text-dark').addClass('text-light');
      $('.animated').addClass('bg-dark');
      logoElement.attr('src', '/images/light-logo.webp');
      localStorage.setItem('darkMode', 'true');
      $('#darkmode-toggle').click();
      htmlElement.attr('data-bs-theme', 'dark');
  }

  function disableDarkMode() {
    $('.btn-light').removeClass('btn-light').addClass('btn-dark');
    $('#links-social li a').removeClass('text-light').addClass('text-dark');
    $('.animated').removeClass('bg-dark');
    logoElement.attr('src', '/images/main-logo.webp');
    localStorage.setItem('darkMode', 'false');
    htmlElement.removeAttr('data-bs-theme');
  }


})(jQuery);

var i18n = window.domI18n({
  selector: '[data-translatable]',
  separator: '//',
  languages: ['en', 'fr' , 'ar'],
  defaultLanguage: 'en'
});

i18n.changeLanguage('en');

function changeLang(lang) {
  document.documentElement.lang = lang;
  
  i18n.changeLanguage(lang);

  localStorage.setItem('language', lang);
}

function loadSavedLang() {
  const savedLang = localStorage.getItem('language');
  if (savedLang) {
    changeLang(savedLang);
  }
}



window.addEventListener('load', loadSavedLang);


