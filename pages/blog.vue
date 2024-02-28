<template>
  <Svgs></Svgs>
  <Header :home="false"></Header>
  <Blog :articles="articles"></Blog>
</template>
<script setup lang="ts">
useHead({
  title: 'My App',
  script: [
  {src: '/js/jquery-1.11.0.min.js',tagPosition: 'bodyClose'},
  {src: '/js/plugins.js',tagPosition: 'bodyClose'},
  {src: '/js/script.js',tagPosition: 'bodyClose',async: true},
  ],
  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'author', content: 'Israr Kboubi Blog' },
      { name: 'keywords', content: 'full stack Israr Kboubi Blog' },
      { name: 'description', content: 'Explore the projects and articles of Israr Kboubi in the field of web development. You can find a lot of topics that can help you improuve your projects' },
      { property: 'og:title', content: "Israr Kboubi's Blog" },
      { property: 'og:description', content: 'Explore the projects and articles of Israr Kboubi in the field of web development. You can find a lot of topics that can help you improuve your projects.' },
      { property: 'og:image', content: '/images/og-blog.webp' },
      { property: 'og:url', content: 'https://www.israr-kboubi.com/blog' },
      { name: 'og:site_name', content: "Israr Kboubi's Portfolio" },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: "Israr Kboubi's Blog" },
      { name: 'twitter:description', content: 'Explore the projects and articles of Israr Kboubi in the field of web development. You can find a lot of topics that can help you improuve your projects' },
      { name: 'twitter:image', content: '/images/og-blog.webp' },
    ]
});
const route = useRoute();
const articles = ref(null);
fetch('https://dockerhub-israr-blog.onrender.com/articles/')
    .then(response => response.json())
    .then(data => articles.value = data);
</script>