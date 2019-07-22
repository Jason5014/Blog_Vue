<template>
  <div>
    <h3>{{number}} - {{text}}</h3>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    number: {
      type: Number,
      required: true
    },
    text: {
      type: String,
      default: '子组件'
    },
    obj: {
      type: Object,
      default: function () {
        return {x: 1, y: 2, z: 3}
      }
    }
  },
  data: function () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>

</style>
