<template>
  <div>
    <table class="table is-hoverable is-fullwidth container">
      <thead>
        <tr>
          <th width="20%">ID</th>
          <th width="80%">Todo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in doneTodos" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Storage from '../plugins/storage'
// import { mapActions } from 'vuex'
export default {
  data() {
    return {
      todos: Storage.fetch()
    }
  },
  computed: {
    doneTodos: function() {
      return this.todos.filter(function(todo) {
        return !todo.state
      })
    }
  },
  created() {
    this.todos = Storage.fetch()
  }
}
</script>
