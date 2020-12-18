export const project = (info) => {
  return {
    projectTitle: info["title"] || "",
    todos: info["todos"] || [],
  }
}