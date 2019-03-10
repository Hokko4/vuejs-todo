export default {
  STORAGE_KEY: 'vuejs-todo',
  fetch: function() {
    var todos = JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]')
    todos.forEach(function(todo, index) {
      todo.id = index
    })
    this.uid = todos.length
    return todos
  },
  save: function(todos) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos))
  }
}
