<template>
  <div>
    <form @submit.prevent="addTodo2">
      <b-field grouped position="is-centered" class="container">
        <b-input v-model="title" size="is-medium" class=""></b-input>
        <button type="submit" class="button is-success is-medium">登録</button>
      </b-field>
    </form>

    <table class="table is-hoverable is-fullwidth container">
      <thead>
        <tr>
          <th width="20%">ID</th>
          <th width="60%">Todo</th>
          <th width="20%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in activeTodos3" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <b-button type="is-info" @click="changeState(item.id)"
              >完了</b-button
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      title: ''
    }
  },
  computed: {
    activeTodos2: function() {
      return this.todos.filter(function(todo) {
        return todo.state
      })
    },
    activeTodos3() {
      console.log('computed')
      console.log(this.todos)
      if (this.todos.length === 0) return []
      return this.todos.filter(function(todo) {
        return todo.state
      })
    },
    ...mapGetters(['todos'])
  },
  created() {
    console.log('created')
    this.fetchTodos()
  },
  methods: {
    addTodo2() {
      let title = this.title
      if (!title) {
        return
      }

      console.log('addtodo')

      this.saveTodos(title)
    },
    changeState(id) {
      console.log('ボタン押した')
      this.changeState(id)
    },
    removeTodo(item) {
      let index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    },
    ...mapActions(['fetchTodos', 'saveTodos', 'changeState'])
  }
}
</script>

<style lang="scss" scoped></style>
