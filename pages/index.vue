
<template>
  <Svgs></Svgs>
  <Header home></Header>
  <MainContent></MainContent>
</template>
<script setup lang="ts">
useHead({
  title: 'Israr kboubi',
  script: [
  {         src: '/js/jquery-1.11.0.min.js',tagPosition: 'bodyClose'},
  {         src: '/js/plugins.js',tagPosition: 'bodyClose'},
  {         src: '/js/animatedModal.min.js',tagPosition: 'bodyClose'},
  {         src: '/js/modalSetup.js',tagPosition: 'bodyClose'},
  {         src: '/js/script.js',tagPosition: 'bodyClose'},
  ],
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'author', content: 'Israr Kboubi' },
      { name: 'keywords', content: 'full stack' },
      { name: 'description', content: 'Explore the projects and achievements of Israr Kboubi in the field of web development.' },
      { property: 'og:title', content: "Israr Kboubi's Portfolio" },
      { property: 'og:description', content: 'Explore the projects and achievements of Israr Kboubi in the field of web development.' },
      { property: 'og:image', content: '/images/og-img.webp' },
      { property: 'og:url', content: 'https://www.israr-kboubi.com' }, // make sure to use the full URL
      { name: 'og:site_name', content: "Israr Kboubi's Portfolio" },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Israr Kboubi's Portfolio" },
      { name: 'twitter:description', content: 'Explore the projects and achievements of Israr Kboubi in the field of web development.' },
      { name: 'twitter:image', content: '/images/og-img.webp' },
    ]
})
</script>