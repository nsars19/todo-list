export const project = (info) => {
  return {
    title: info["title"] || "",
    todos: info["todos"] || [],
  }
}