<template>
  <div>
    <form @submit.prevent="addTodo">
      <b-field grouped position="is-centered" class="container">
        <input v-model="title" type="text" />
        <button type="submit" class="button is-success">登録</button>
      </b-field>
    </form>

    <table class="table is-hoverable is-fullwidth container">
      <thead>
        <tr>
          <th>ID</th>
          <th>Todo</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in todos" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.title }} {{ item.state }}</td>
          <td>
            <!-- <button
              type="submit"
              class="button is-danger"
              @click="removeTodo(item)"
            >
              削除
            </button> -->
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
      // let title = this.$refs.title
      // if (!title.value.length) {
      //   return
      // }

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
