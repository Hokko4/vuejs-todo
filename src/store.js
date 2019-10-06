import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const STORAGE_KEY = 'vuejs-todo'

export default new Vuex.Store({
  state: {
    todos: [],
    uid: 0
  },

  getters: {
    todos: state => state.todos,
    uid: state => state.uid
  },

  mutations: {
    setTodos(state, { todos }) {
      state.todos = []

      state.todos = todos
      state.uid = state.todos.length++
    },

    saveTodos(state, { todo }) {
      state.todos.push(todo)
    },

    changeState(state, id) {
      console.log(state.todos)
      state.todos[id].state = false
    }
  },

  actions: {
    fetchTodos({ commit }) {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      console.log('fetchtodos')
      console.log(todos)

      commit('setTodos', { todos })
    },

    saveTodos({ commit }, title) {
      const todo = {
        id: this.state.uid++,
        title: title,
        state: true
      }

      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      console.log(todos)
      todos.push(todo)
      console.log(todos)

      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      console.log('setitem')

      commit('saveTodos', { todo })
    },

    changeState({ commit }, id) {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

      console.log('changestate内でIDは' + id)
      todos.forEach(element => {
        if (element.id === id) {
          element.state = false
          console.log(element.id + '=' + element.state)
        }
      })
      console.log('changestate')
      console.log(id)
      console.log(todos)
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))

      commit('changeState', id)
    }
  }
})
