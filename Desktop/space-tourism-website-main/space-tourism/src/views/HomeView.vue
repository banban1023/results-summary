<template>
  <div class="home">
    <article class="home_msg">
      <p class="title_prev">
        SO, YOU WANT TO TRAVEL TO
      </p>
      <h2 class="title">SPACE</h2>
      <p class="content">
        Let’s face it; if you want to go to space, you might as well genuinely go to
        outer space and not hover kind of on the edge of it. Well sit back, and relax
        because we’ll give you a truly out of this world experience!
      </p>
    </article>
    <section class="home_btn">
      <button @click="$router.push('/destination')">Explore</button>
    </section>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/home.less';
</style>
