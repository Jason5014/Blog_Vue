<template>
  <div>
    <list :title="`代办列表 (${undoneTodosCount})`" :list="undoneTodos" :handle="toggleTodo" />
    <list :title="`已办列表 (${doneTodosCount})`" :list="doneTodos" :handle="toggleTodo" />
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
import List from './List'

export default {
  components: { List },
  data: function () {
    return {}
  },
  methods: {
    toggleTodo (todo) {
      this.$store.dispatch({
        type: 'toggleTodo',
        id: todo.id
      }).then((todos) => {
        console.log('新的todos:', todos)
      })
    }
  },
  computed: {
    ...mapGetters(['doneTodos', 'doneTodosCount', 'undoneTodos', 'undoneTodosCount'])
  }
}
</script>

<style lang="less" scoped>

</style>
