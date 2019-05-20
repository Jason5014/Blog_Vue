<template>
  <div>
    <h2>过渡</h2>
    <a-button @click="show = !show">Test Fade</a-button>
    <transition name="test-fade">
      <p v-if="show">test-fade</p>
    </transition>
    <a-button @click="light = !light">Test</a-button>
    <transition name="test-high-light">
      <p :class="`${light ? 'high-light' : 'low-light'}`">test-fade</p>
    </transition>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
export default {
  components: { AButton: Button },
  data: () => {
    return {
      show: true,
      light: true
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>

@fadeAnimateName: test-fade;
@hightLightAnimateName: test-hight-light;

.@{fadeAnimateName} {
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-active,
  &-leave-active {
    transition: opacity .5s;
  }
}

.high-light {
  color: #333;
}

.low-light {
  color: #ccc;
}

.@{hightLightAnimateName} {
  &-enter-active,
  &-leave-active {
    transition: color .5s;
  }
}
</style>
