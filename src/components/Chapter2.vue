<template>
  <div>
    <h2>数据绑定</h2>
    <h3>插值</h3>
    <span class="span-text">Text: {{text}}</span>
    <span class="span-text" v-once>Text Once: {{text}}</span>
    <div class="logo">Logo: <template v-html="logo"></template></div>
    <button @click="changeText">修改Text</button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  components: { Button },
  data: () => {
    return {
      text: 1,
      logo: '<span>DDFF</span>'
    }
  },
  methods: {
    changeText: function () {
      this.text = Number(this.text) + 1
      console.log(this.text)
    }
  }
}
</script>

<style lang="less" scoped>
  .span-text {
    color: #333;
  }
  .log {

  }
</style>
