export const project = (info) => {
  return {
    projectTitle: info["projectTitle"] || "",
    todos: info["todos"] || [],
    addTodo: function(todo) { this.todos.push(todo) }
  }
}