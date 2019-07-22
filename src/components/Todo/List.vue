<template>
  <div class="todo-list-wrap">
    <h2 class="todo-list-title">{{title}}</h2>
    <ul class="todo-list">
      <li v-for="todo in list" :key="todo.id" @click="handle(todo)">
        {{todo.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array,
    title: String,
    handle: {
      type: Function,
      default: () => {}
    }
  }
}
</script>

<style lang="less" scoped>
@todoListPrefixCls: todo-list;
@lineHeight: 44px;

.@{todoListPrefixCls}-wrap {
  width: 300px;
  padding: 2px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
  background: #f3f6f9;
  margin: 30px auto;
  box-shadow: #999 1px 1px 5px;

  &:hover {
    box-shadow: #999 2px 2px 10px;
  }

  .@{todoListPrefixCls}-title {
    color: #333;
    line-height: @lineHeight;
    height: @lineHeight;
  }

  .@{todoListPrefixCls} {
    margin: 0;
    padding: 0;
    list-style: none;
    font-style: italic;
    li {
      line-height: @lineHeight;
      height: @lineHeight;
      font-size: large;
      cursor: pointer;
      &:nth-child(odd) {
        background: #eee;
      }
      &:hover {
        background: #ddd;
        text-decoration: underline;
      }
    }
  }
}
</style>
