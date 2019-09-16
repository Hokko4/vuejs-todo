<template>
  <div>
    <form @submit.prevent="addTodo">
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
        <tr v-for="item in activeTodos" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>
            <b-button type="is-info" @click="changeState(item)">完了</b-button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Storage from '../plugins/storage'
export default {
  data() {
    return {
      todos: [],
      title: ''
    }
  },
  computed: {
    activeTodos: function() {
      return this.todos.filter(function(todo) {
        return todo.state
      })
    }
  },
  watch: {
    todos: {
      handler(todos) {
        Storage.save(todos)
      },
      deep: true
    }
  },
  created() {
    this.todos = Storage.fetch()
    this.uid = Storage.uid++
  },
  methods: {
    addTodo() {
      let title = this.title
      if (!title) {
        return
      }

      console.log(Storage)
      this.todos.push({
        id: Storage.uid++,
        title: title,
        state: true
      })
      this.title = ''
    },
    changeState(item) {
      item.state = !item.state
    },
    removeTodo(item) {
      let index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
