<template>
  <div class="results_summary">
    <section class="result">
      <h1 class="result_title">Your Result</h1>
      <div class="result_round">
        <h2 class="result_score">76</h2>
        <span class="result_full">of 100</span>
      </div>
      <h3 class="result_grade">Great</h3>
      <p class="result_evaluate">You scored higher than 65% of the people who have taken these tests.</p>
    </section>
    <section class="summary">
      <h2 class="summary_title">Summary</h2>
    </section>
  </div>
</template>

<script>
import data from '@/data/data.json'
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      skillList: []
    }
  },
  methods: {
    getSkillList () {
      this.skillList = data
      console.log(this.skillList)
    }
  },
  created () {
    this.getSkillList()
  }
}
</script>

<style lang="less" scoped>
@import '@/styles/index.less';
</style>
