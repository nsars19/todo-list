export const project = (info) => ({
    projectTitle: info.projectTitle || "Unnamed Project",
    todos:        info.todos        || [],
    addTodo(todo) { this.todos.push(todo) },
    removeTodo(idx) { this.todos.splice(idx, 1) }
  })