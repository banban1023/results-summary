<template>
  <div class="home">
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/destination">DESTINATION</router-link>
      <router-link to="/crew">CREW</router-link>
      <router-link to="/technology">TECHNOLOGY</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>
