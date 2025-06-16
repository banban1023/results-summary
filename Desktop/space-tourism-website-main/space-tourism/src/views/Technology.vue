<template>
  <div class="technology">
    <header>
      <h2 class="technology_title">
        <span>03</span>
        SPACE LAUNCH 101
      </h2>
    </header>
    <section class="technology_img" v-if="techLandList.length > 0">
      <img src="" alt="" class="tech_deskTop">
      <img :src="getImageUrl(techLandList[activeIndex])" alt="" class="tech_mobile">
    </section>
    <section class="technology_content">
      <ol>
        <li
          v-for="item in 3"
          :key="item"
          @click="activeIndex = item-1"
        >{{item}}</li>
      </ol>
      <article>
        <p class="technology_role"></p>
          <h3 class="technology_name"></h3>
          <p class="technology_content">
          </p>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'TechnologyPage',
  data () {
    return {
      technologyList: [],
      techLandList: [],
      techPortList: [],
      activeIndex: 0
    }
  },
  methods: {
    async getTechnoligyList () {
      const { data } = await axios.get('http://localhost:3000/technology')
      this.technologyList = data
      this.techLandList = data.map((item) => item.images.landscape)
      this.techPortList = data.map((item) => item.images.portrait)
      console.log(this.technologyList)
      console.log(this.techLandList)
      console.log(this.techPortList)
    },
    getImageUrl (path) {
      const images = require.context('@/assets/technology', false, /\.(png|jpe?g|webp)$/)
      const fileName = path.split('/').pop()
      return images(`./${fileName}`)
    }
  },
  created () {
    this.getTechnoligyList()
  }
}
</script>

<style>
@import '@/styles/technology.less';
</style>
