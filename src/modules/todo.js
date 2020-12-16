export const todo = (info = null) => {
  return {
    title: info["title"] || "",
    description: info["description"] || "",
    dueDate: info["dueDate"] || "",
    priority: info["priority"] || "",
    notes: info["notes"] || [],
  }
}
