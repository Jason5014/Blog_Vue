<template>
  <div>
    <h2>父组件</h2>
    <child :number="1" />
    <child :number="2" text="子组件 1"  />
    <child :number="3" :text="child"  />
  </div>
</template>

<script>
import Child from './Child'
export default {
  components: { Child },
  data: function () {
    return {
      child: '子组件 2',
      obj: {a: 1, b: '2', c: false}
    }
  },
  beforeCreate: function () {
    console.log('before create')
  },
  created: function () {
    console.log('create')
  },
  beforeMount: function () {
    console.log('beforeMount')
  },
  mounted: function () {
    console.log('mounted')
  },
  beforeUpdate: function () {
    console.log('beforeUpdate')
  },
  updated: function () {
    console.log('updated')
  },
  activated: function () {
    console.log('activated')
  },
  deactivated: function () {
    console.log('deactivated')
  },
  beforeDestroy: function () {
    console.log('beforeDestroy ')
  },
  destroyed: function () {
    console.log('destroyed')
  }
}
</script>

<style lang="less" scoped>

</style>
