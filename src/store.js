import Vue from 'vue'
import Vuex from 'vuex'
// import { isTemplateElement } from '@babel/types'

Vue.use(Vuex)
const STORAGE_KEY = 'vuejs-todo'

export default new Vuex.Store({
  state: {
    todos: null,
    uid: 0,
    state: true
  },
  mutations: {
    setTodos(state, { todos }) {
      state.todos = todos
      state.uid = todos.length
    },
    changeState(state) {
      state.state = !state.state
    }
  },
  actions: {
    fetchTodos({ commit }) {
      const todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')

      commit('setTodos', { todos })
    },
    saveTodos({ commit }, { todo }) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todo))

      commit('saveTodos')
    },
    changeState({ commit }) {
      commit('changeState')
    }
  }
})
