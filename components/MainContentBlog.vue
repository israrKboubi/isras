<template>
      <div class="container mx-1">
        <div class="justify-content-center px-1 mx-1 px-xl-5 mx-xl-5 mt-lg-5">
        <div class="col-lg-7 pb-5">
          <br>
          <h2 class="display-4 txt-fx slide-up" >{{article.title}}</h2>
          <p class="meta-date">{{getFormattedDate(article.date)}}</p>
          <div class="data-info py-3 px-3">
            <div class="article-block">
              <div>
                <img :src="article.banner" :alt="`${article.title} image`" />
              </div>
              <div>
              <br>
              <p >
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer></Footer>
</template>
<script lang="ts" setup>

defineProps<{
  article:{title:string,banner:string,content:string,date:string}
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
.meta-date{
  width: 100%;
  text-align: right;
}
</style>