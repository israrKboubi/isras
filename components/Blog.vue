<template>
  <main class="col-lg-10 offset-lg-2">
    <div class="container">
      <div class="justify-content-center px-1 mx-1 px-xl-5 mx-xl-5 mt-lg-5 mt-sm-5 mt-xs-5">
        <div class="col-lg-7 pb-5">
          <h2 class="display-4 txt-fx slide-up" data-translatable="experiences-heading">Blog</h2>
          <h4 class="display-7 txt-fx slide-up" data-translatable="keyrus-title">Eplore my blog an enjoy the expeirence
          </h4>
          <div class="data-info py-3 px-3" v-for="article in articles">
            <NuxtLink :to="`/articles/${article.id}`">
            <div class="article-block">
              <div>
                <img :src="article.banner" :alt="`${article.title} image`" />
              </div>
              <div>
              <h3 class="info-title mt-2" data-translatable="job-role1">{{article.title}}</h3>
              <p class="content-blog-p" v-html="article.content">
              </p>
              <p class="meta-date">{{getFormattedDate(article.date)}}</p>
            </div>
            </div>
            </NuxtLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  </main>
</template>
<script lang="ts" setup>

defineProps<{
  articles: [] | any
}>()

function getFormattedDate(date) {
      const options = { day: 'numeric', month: 'long', year: 'numeric' };
      let dayte=new Date();
      return dayte.toLocaleDateString('en-US', options);
    }

</script>
<style scoped>
.article-block{
 display: flex;
 flex-direction: column;
}
.article-block img{

  width: 100%;
  max-width: 100%;
    height: 280px;
    object-fit: cover;
}
.article-block .meta-date{
  width: 100%;
  text-align: right;
}
.article-block p {      overflow: hidden;
   display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical; 
  }
  .content-blog-p h1,
.content-blog-p h2,
.content-blog-p h3 {
    font-size: 12px;
    margin-top: 3px;
}
</style>