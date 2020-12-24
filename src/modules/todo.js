export const todo = (info = null) => {
  return {
    todoTitle:   info["todoTitle"]   || "Unnamed Todo",
    description: info["description"] || "It's self-explanatory!",
    dueDate:     info["dueDate"]     || "No due date.",
    priority:    info["priority"]    || "None.",
  }
}
