export const todo = (info = null) => {
  return {
    todoTitle: info["title"] || "",
    description: info["description"] || "",
    dueDate: info["dueDate"] || "",
    priority: info["priority"] || "",
    notes: info["notes"] || [],
  }
}
