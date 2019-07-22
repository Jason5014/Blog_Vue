
const state = {
  todos: [
    { id: 1, text: 'todo1', done: true },
    { id: 2, text: 'todo2', done: true },
    { id: 3, text: 'todo3', done: false },
    { id: 4, text: 'todo4', done: false },
    { id: 5, text: 'todo5', done: true },
    { id: 6, text: 'todo6', done: false }
  ]
}

const getters = {
  undoneTodos: state => state.todos.filter(todo => !todo.done),
  doneTodos: state => state.todos.filter(todo => todo.done),
  doneTodosCount: (state, getters) => getters.doneTodos.length,
  undoneTodosCount: (state, getters) => getters.undoneTodos.length
}

const mutations = {
  toggleTodo: (state, payload) => state.todos.map(todo => {
    if (todo.id === payload.id) {
      todo.done = !todo.done
    }
  })
}

const actions = {
  toggleTodo ({ commit, state }, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('toggleTodo', payload)
        resolve(state.todos)
      }, 100)
    })
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
