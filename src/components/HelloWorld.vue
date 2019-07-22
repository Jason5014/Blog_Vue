<template>
  <div>
    <h1>{{mergeText}} - {{count}}</h1>
    <a-button type="primary" @click="changeText">{{text}}</a-button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import { mapState } from 'vuex'

export default {
  components: { AButton: Button },
  data: () => {
    return {
      text: 'Hello world.',
      otherText: 'Hi Jason.'
    }
  },
  methods: {
    changeText: function () {
      this.text = 'The changed text.'
    }
  },
  watch: {
    text: function (newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  computed: {
    mergeText: function () {
      return this.text + this.otherText
    },
    ...mapState([
      'count'
    ])
  }
}
</script>
