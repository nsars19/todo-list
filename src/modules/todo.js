export const todo = (info = null) => {
  return {
    todoTitle: info["todoTitle"] || "",
    description: info["description"] || "",
    dueDate: info["dueDate"] || "",
    priority: info["priority"] || "",
    notes: info["notes"] || [],
  }
}
