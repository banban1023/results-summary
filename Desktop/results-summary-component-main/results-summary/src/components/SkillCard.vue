<template>
  <div class="card" :style="{ backgroundColor: `hsla(${color.h}, ${color.s}, ${color.l}, ${color.a})` }">
    <section class="card_left">
      <img :src="iconPath" alt="item.category">
      <p class="card_skill" :style="{ color: `hsl(${color.h}, ${color.s}, ${color.l})` }">{{item.category}}</p>
    </section>
    <section class="card_score">
      <span>{{item.score}}</span> / 100
    </section>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      validator: (value) => ('icon' in value && 'category' in value)
    },
    color: {
      type: Object,
      required: true
    }
  },
  computed: {
    iconPath () {
      const fileName = this.item.icon.split('/').pop()
      try {
        return require(`@/assets/images/${fileName}`)
      } catch (e) {
        console.error('无法加载图标:', fileName)
        return ''
      }
    }
  }
}
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  height: 56px;
  margin-bottom: 19px;
  border-radius: 10px;
  padding: 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .card_left {
    display: flex;
    img {
      margin-right: 15px;
    }
    .card_skill {
      font-weight: 600;
    }
  }
  .card_score {
    color: #929292;
    font-weight: 700;
    span {
      color: #000;
    }
  }
}
</style>
