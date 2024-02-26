<template>
  <Svgs></Svgs>
  <Header></Header>
  <MainContentBlog v-if="data" :article="data"></MainContentBlog>
</template>
<script setup lang="ts">

const route = useRoute();
const { data } = await 
useFetch<{ title: string, banner: string, content: string, date: string }>
('https://dockerhub-israr-blog.onrender.com/articles/'+route.params.id);

useSeoMeta({
  title:data.value?.title,
  ogTitle:data.value?.title,
  ogDescription:data.value?.title,
  ogImage:data.value?.banner,
  ogUrl:`https://www.israr-kboubi.com/articles/${route.params.id}`,
  twitterTitle:data.value?.title,
  twitterDescription:data.value?.title,
  twitterImage:data.value?.banner
});

useHead({
  title:()=> "article",
  meta:[
  { property: 'og:title', content:  data.value?.title },
  { property: 'og:description', content:  data.value?.title },
  { property: 'og:image', content:  data.value?.banner },
  { property: 'og:url', content:  `https://www.israr-kboubi.com/articles/${route.params.id}` },
  { property: 'twitter:title', content:  data.value?.title },
  { property: 'twitter:description', content:  data.value?.title },
  { property: 'twitter:image', content:  data.value?.banner },
  { property: 'twitter:card', content: data.value?.title }
  ]
});

</script>