export const project = (info) => {
  return {
    projectTitle: info["projectTitle"] || "Unnamed Project",
    todos:        info["todos"]        || [],
    addTodo: function(todo) { this.todos.push(todo) }
  }
}