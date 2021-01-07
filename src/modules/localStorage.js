export const storage = () => {
  const storage = window.localStorage;
  const prefix = "project";

  // Basic access methods
  const read = (key) => storage.getItem(key);
  const write = (key, value) => storage.setItem(key, value);
  const remove = (key) => storage.removeItem(key);

  // Complex access methods. Write objects to storage
  function writeProject(project) {
    let count = getProjectCount() || 0;
    write(`${prefix}${count++}`, JSON.stringify(project));
    setProjectCount(count);
  }

  function loadProjects() {
    const projectCount = getProjectCount();
    const projects = [];

    for (let i = 0; i < projectCount; i++) {
      projects.push(JSON.parse(read(`${prefix}${i}`)));
    }

    return projects;
  }

  function setProjectCount(i) {
    write(`${prefix}Count`, i);
  }
  function getProjectCount() {
    return read(`${prefix}Count`);
  }

  return {
    read,
    write,
    remove,
    writeProject,
    loadProjects,
    setProjectCount,
    getProjectCount,
  };
};
