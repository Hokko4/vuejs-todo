<template>
  <div>
    <form @submit.prevent="addTodo">
      <input ref="title" type="text" />
      <button type="submit">登録</button>
    </form>
    <ul v-for="(item, index) in todos" :key="index">
      <li><button @click="changeState(item)"></button></li>
      <li>{{ item.id }} {{ item.title }} {{ item.state }}</li>
      <li><button type="submit" @click="removeTodo(item)">削除</button></li>
    </ul>
  </div>
</template>

<script>
import Storage from '../plugins/storage'
export default {
  data() {
    return {
      todos: []
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
  },
  methods: {
    addTodo() {
      let title = this.$refs.title
      if (!title.value.length) {
        return
      }

      console.log(Storage)
      this.todos.push({
        id: Storage.uid++,
        title: title.value,
        state: true
      })
      title.value = ''
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

<style lang="scss" scoped>
li {
  display: inline-block;
  list-style: none;
}
</style>
