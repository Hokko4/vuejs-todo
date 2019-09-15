<template>
  <div>
    <b-table :data="todos" :columns="columns" class="container"></b-table>
    <!-- <table>
      <thead>
        <th></th>
      </thead>
    </table> -->
  </div>
</template>

<script>
import Storage from '../plugins/storage'
export default {
  data() {
    return {
      todos: Storage.fetch(),
      columns: [
        {
          field: 'id',
          label: 'ID'
        },
        {
          field: 'title',
          label: 'Todo'
        }
      ]
    }
  },
  created() {
    this.todos = Storage.fetch()
  }
  // methods: {

  // }
}
</script>
