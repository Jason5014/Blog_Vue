<template>
  <div>
    <h2>指令</h2>
    <h3>v-if</h3>
    <p v-if="greeting">Hello</p>
    <h3>v-show</h3>
    <p v-show="greeting">Hello</p>
    <h3>v-else</h3>
    <p v-if="judge">我是对的</p>
    <p v-else>我是错的</p>
    <h3>v-model</h3>
    <form>
      姓名：
      <input type="text" v-model="data.name" placeholder="enter your name" debounce="5000" />
      <br/>
      性别：
      <input type="radio" id="man" value="1" v-model="data.sex"/>
      <label for="man">男</label>
      <input type="radio" id="male" value="2" v-model="data.sex"/>
      <label for="male">女</label>
      <br/>
      兴趣：
      <span v-for="(interest, index) in interests" :key="interest.value" :class="getInterestClass(index)">
        <input type="checkbox" id="interest.value" value="interest.value" v-model="data.interest"/>
        <label for="interest.value">{{interest.text}}</label>
      </span>
      <br/>
      身份：
      <select v-model="data.identity">
        <option v-for="identity in identitis" :key="identity.value" value="identity.value" selected="identity.selected">{{identity.text}}</option>
      </select>
    </form>
    <h3>v-text</h3>
    <span v-text="msg"></span>
    <h3>v-html</h3>
    <p v-html="html"></p>
    <h3></h3>
    <h3>自定义</h3>
    <span v-my-direction="msg"></span>
    <button @click="changeMsg">修改msg</button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'

const myDirection = {
  bind: function (...arg) {
    console.log('bind: ', arg)
  },
  update: function (...arg) {
    console.log('update: ', arg)
  },
  unbind: function (...arg) {
    console.log('unbind: ', arg)
  }
}

export default {
  directives: { myDirection },
  components: { Button },
  data: () => {
    return {
      greeting: true,
      judge: true,
      interests: [
        {value: 'book', text: '阅读'},
        {value: 'swim', text: '游泳'},
        {value: 'game', text: '游戏'},
        {value: 'sing', text: '唱歌'}
      ],
      identitis: [
        {value: 'teacher', text: '教师', selected: true},
        {value: 'doctor', text: '医生'},
        {value: 'lawyer', text: '律师'}
      ],
      data: {
        name: '',
        sex: '',
        interest: [],
        identity: ''
      },
      msg: 'Hello',
      html: '<span>HTML</span>'
    }
  },
  methods: {
    getInterestClass: function (index) {
      return `interest interest-${index}`
    },
    changeMsg: function () {
      this.msg = 'changed msg'
    }
  },
  watch: {
    data: {
      handler (oldValue, newValue) {
        console.log(oldValue, '=>', newValue)
      },
      deep: true
    }
  }
}
</script>

<style lang="less" scoped>
  .interest {
    margin-right: 15px;
  }
</style>
