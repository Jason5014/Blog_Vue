<template>
  <div>
    <h2>过滤器</h2>
    <p>大写：{{'abc' | uppercase }}</p>
    <p>首字母大写：{{'abc' | capitalize }}</p>
    <p>小写：{{'ABC' | lowercase }}</p>
    <p>传参：{{'Head' | filterFunc('First', 'Second', 'Third')}}</p>
    <p>json: {{obj | json(null, 2)}}</p>
  </div>
</template>

<script>
const lowercase = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toLowerCase()
}
const uppercase = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.toUpperCase()
}
const capitalize = function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
}
const filterFunc = function (v, a, b, c) {
  return `${v}-${a}-${b}-${c}`
}
const json = function (value, replace, space = 0) {
  if (!value) return ''
  return JSON.stringify(value, replace, space)
}
export default {
  filters: { lowercase, uppercase, capitalize, filterFunc, json },
  data: () => {
    return {
      obj: { 'name': 'Runoob', 'initDate': new Date(), 'site': 'www.runoob.com' }
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
</style>
