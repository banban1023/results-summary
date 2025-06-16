<template>
  <div class="index">
    <header>
      <h1 class="logo"><a href="/home">space-tourism</a></h1>
      <van-cell @click="showPopup" class="index_mobile_nav">展示弹出层</van-cell>
      <van-popup v-model="show" position="right" closeable>
        <router-link
          v-for="(item, index) in routerList"
          :key="index"
          :to="item.router"
          :class="{active: $route.path === item.router}"
          @click.native="show = false"
        ><span>{{item.number}}</span>{{item.name}}</router-link>
      </van-popup>
      <div class="line"></div>
      <nav class="index_desktop_nav">
        <router-link to="/home"><span>00</span>HOME</router-link>
        <router-link to="/destination"><span>01</span>DESTINATION</router-link>
        <router-link to="/crew"><span>02</span>CREW</router-link>
        <router-link to="/technology"><span>03</span>TECHNOLOGY</router-link>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      show: false,
      routerList: [
        { router: '/home', number: '00', name: 'HOME' },
        { router: '/destination', number: '01', name: 'DESTINATION' },
        { router: '/crew', number: '02', name: 'CREW' },
        { router: '/technology', number: '03', name: 'TECHNOLOGY' }
      ]
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.less';
</style>
