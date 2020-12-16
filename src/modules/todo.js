export const todo = (info = null) => {
  const todoInfo = {
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    notes: [],
  }
  
  for (let prop in info) {
    todoInfo[prop] = info[prop]
  }

  return todoInfo
}
