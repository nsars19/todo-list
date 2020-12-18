export const project = (info) => {
  return {
    projectTitle: info["projectTitle"] || "",
    todos: info["todos"] || [],
  }
}