<template>
  <div>
    <h2>Method</h2>
    <input @keyup.13="submit"/>
    <input @keyup.enter="submit"/>
  </div>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    submit: function () {
      console.log('submit')
    }
  }
}
</script>

<style lang="less" scoped>
</style>
