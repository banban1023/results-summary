<template>
  <div class="results_summary">
    <section class="result">
      <h1 class="result_title">Your Result</h1>
      <div class="result_round">
        <h2 class="result_score" ref="scoreText">{{ displayScore }}</h2>
        <span class="result_full">of 100</span>
      </div>
      <h3 class="result_grade">Great</h3>
      <p class="result_evaluate">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
    <section class="summary">
      <h2 class="summary_title">Summary</h2>
      <SkillCard
        v-for="(item, index) in skillList"
        :key="index"
        :item='item'
        :color='colorList[index]'
      ></SkillCard>
      <button class="summary_btn">Continue</button>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import data from '@/data/data.json'
import SkillCard from './components/SkillCard.vue'
export default {
  name: 'App',
  components: {
    SkillCard
  },
  data () {
    return {
      skillList: [],
      finalScore: 76,
      displayScore: 0, // 用于动画显示的分数
      colorList: [
        { h: '0', s: '100%', l: '67%', a: '0.1' },
        { h: '39', s: '100%', l: '56%', a: '0.1' },
        { h: '166', s: '100%', l: '37%', a: '0.1' },
        { h: '234', s: '85%', l: '45%', a: '0.1' }
      ]
    }
  },
  methods: {
    getSkillList () {
      this.skillList = data
      // console.log(this.skillList)
    },
    animateScore () {
      gsap.to(this.$data, {
        duration: 1,
        displayScore: this.finalScore,
        roundProps: 'displayScore', // 确保整数
        ease: 'power1.out'
      })
    }
  },
  created () {
    this.getSkillList()
    this.animateScore()
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.less';
</style>
