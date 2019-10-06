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
import { mapGetters } from 'vuex'

export default {
  computed: {
    doneTodos: function() {
      if (this.todos.length === 0) return []
      return this.todos.filter(function(todo) {
        return !todo.state
      })
    },
    ...mapGetters(['todos'])
  }
}
</script>
