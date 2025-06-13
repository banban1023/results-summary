<template>
  <div class="destination">
    <section class="destination_img">
      <p class="page_title">
        <span>01</span>
        PICK YOUR DESTINATION
      </p>
      <div class="destination_tabs_img" v-if="destinationsList.length">
        <img :src="getImageUrl(destinationsList[active]?.images?.png)" alt="">
      </div>
    </section>
    <section class="destination_msg">
      <van-tabs v-model="active">
        <van-tab
          v-for="(item, index) in destinationsList"
          :key="index"
          :title="item.name.toUpperCase()"
        >
          <h2>{{item.name.toUpperCase()}}</h2>
          <p class="msg_content">
            {{item.description}}
          </p>
          <div class="line"></div>
          <p class="distance">
            AVG. DISTANCE
            <span>{{item.distance}}</span>
          </p>
          <p class="time">
            EST. TRAVEL TIME
            <span>{{item.travel}}</span>
          </p>
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DestinationPage',
  data () {
    return {
      destinationsList: [],
      active: 0
    }
  },
  created () {
    this.getDestinations()
  },
  methods: {
    async getDestinations () {
      const res = await axios.get('http://localhost:3000/destinations')
      this.destinationsList = res.data
      console.log(this.destinationsList)
    },
    getImageUrl (path) {
      const images = require.context('@/assets/destination', false, /\.(png|jpe?g|webp)$/)
      const fileName = path.split('/').pop()
      return images(`./${fileName}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/destination.less';
</style>
