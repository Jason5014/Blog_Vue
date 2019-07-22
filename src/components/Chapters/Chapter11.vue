<template>
  <div>
    <h2>组件</h2>
    <h3>父子组件</h3>
    <parent/>
  </div>
</template>

<script>
import Parent from '../components/Parent'

export default {
  components: { Parent },
  data: function () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
