export const storage = () => {
  const storage = window.localStorage
  const JSONObjectMatch = /,(?![^\{\[]*[\]\}])/g
  storage.setItem("projectCount", 0)

  // Basic access methods
  const read = key => storage.getItem(key)
  const write = (key, value) => storage.setItem(key, value)
  const remove = key => storage.removeItem(key)

  // Complex access methods. Write objects to storage
  function writeProject(project) {
    let count = getProjectCount()
    write(`project${count++}`, JSON.stringify(project))
    setProjectCount(count)
  }

  function loadProjects() {
    const projectCount = getProjectCount()
    const projects = []

    for (let i = 0; i < projectCount; i++) {
      projects.push(JSON.parse(read(`project${i}`)))
    }
    
    return projects
  }

  function setProjectCount(i) { write("projectCount", i) }
  function getProjectCount()  { return read("projectCount") }

  return {
    read,
    write,
    remove,
    writeProject,
    loadProjects,
    setProjectCount,
    getProjectCount,
  }
}
