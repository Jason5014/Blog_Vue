<template>
  <div>
    <h2>Class与Style绑定</h2>
    <span class="simple" :class="{'t-reverse': isReverse, 'b-yellow': isBGYellow}">text</span>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isReverse: true,
      isBGYellow: true
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .simple {
    font-size: 24px;
  }
  .t-reverse {
    color: white;
  }
  .b-yellow {
    background: yellow;
  }
</style>
