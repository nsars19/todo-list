(()=>{"use strict";var n={846:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap);"]),r.push([n.id,'header {\n  user-select: none;\n  background: #1d1e2f;\n  padding: 10px 20px;\n  font-size: 1.6em;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n}\nheader .title h1 {\n  font-family: "Righteous", cursive;\n}\nheader .nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  header {\n    font-size: 1em;\n  }\n  header .nav,\nheader .nav-selected {\n    width: 30px;\n    height: 27px;\n    display: inline-block;\n    justify-self: end;\n    display: grid;\n    place-items: center;\n    transition: all 2.5s ease-in;\n  }\n  header .nav > *,\nheader .nav-selected > * {\n    height: 4px;\n    width: 25px;\n    border-radius: 20px;\n    border: 1px solid white;\n    background-color: white;\n  }\n  header .nav-selected {\n    position: relative;\n    translate: all 0.2s transform;\n  }\n  header .nav-selected #bar1 {\n    position: absolute;\n    transform: rotate(-0.125turn);\n  }\n  header .nav-selected #bar2 {\n    display: none;\n  }\n  header .nav-selected #bar3 {\n    position: absolute;\n    transform: rotate(0.125turn);\n  }\n}\n\n.sidebar {\n  position: absolute;\n  right: 0;\n  z-index: 999;\n  height: calc(100vh - 85px);\n  width: 35%;\n  max-width: 350px;\n  border-left: 2px solid #333;\n  background-color: #25252c;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: calc(100vh - 61px);\n  }\n}\n.sidebar .new-project:hover,\n.sidebar .projects > *:hover {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active,\n.sidebar .projects > *:active {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active .project-title,\n.sidebar .new-project:active h2,\n.sidebar .projects > *:active .project-title,\n.sidebar .projects > *:active h2 {\n  text-shadow: none;\n}\n\n@media (max-width: 768px) {\n  [data-sidebar-active=true] {\n    width: 300px;\n    background-color: #25252c;\n  }\n\n  [data-sidebar-active=false] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  [data-sidebar-active=true] {\n    min-width: 100vw;\n  }\n}\n.new-project {\n  padding: 15px;\n  font-size: 1em;\n  text-shadow: 1px 1px 3px #000;\n}\n.new-project .icon {\n  font-size: 1.2em;\n}\n\n.projects {\n  display: grid;\n  text-shadow: 1px 1px 3px #000;\n}\n.projects .project {\n  padding: 10px 40px 10px 15px;\n  position: relative;\n}\n\n.project-focused {\n  display: grid;\n  margin: 30px;\n  width: 72.5%;\n}\n.project-focused .title {\n  padding-bottom: 20px;\n  font-size: 2.1em;\n}\n\n.todos {\n  display: grid;\n  border-bottom: none;\n  margin-top: 20px;\n  max-width: 400px;\n}\n.todos .todo {\n  padding-left: 8px;\n  padding: 8px;\n  border: 1px solid #333;\n  border-bottom: none;\n  max-width: 400px;\n  position: relative;\n}\n.todos .todo:last-child {\n  border-bottom: 1px solid #333;\n}\n.todos .prop-header {\n  font-size: 0.87em;\n}\n.todos .prop-header .todoTitle {\n  font-size: 1.2em;\n}\n.todos .description,\n.todos .dueDate,\n.todos .priority {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.controls {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 40px;\n  width: 60px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  gap: 3px;\n  font-weight: bolder;\n  user-select: none;\n}\n.controls .todo-complete {\n  font-size: 23px;\n  color: #1a1;\n}\n.controls .todo-complete:hover {\n  color: #2b2;\n}\n.controls .todo-remove {\n  font-size: 21px;\n  color: #a22;\n}\n.controls .todo-remove:hover {\n  color: #b33;\n}\n\n[data-todo-active=true] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: margin-top 0.3s, margin-bottom 0.2s;\n}\n[data-todo-active=true] > * {\n  padding: 8px;\n  padding-left: 5px;\n}\n\n[data-todo-active=false] {\n  height: 0;\n  width: 0;\n}\n[data-todo-active=false] > * {\n  display: none;\n}\n\n.bottom-controls {\n  position: fixed;\n  background: #1d1e2f;\n  bottom: 0;\n  width: 100%;\n  overflow-x: hidden;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 80px 140px 110px;\n  align-items: center;\n  gap: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px #000;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bottom-controls > * {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.bottom-controls > *:hover {\n  background: #dbdbdb1a;\n}\n.bottom-controls > *:active {\n  background: #dbdbdb1a;\n}\n@media (max-width: 768px) {\n  .bottom-controls {\n    height: 50px;\n  }\n  .bottom-controls > * {\n    font-size: 20px;\n  }\n}\n@media (min-width: 768.01px) {\n  .bottom-controls {\n    grid-template-columns: 115px 180px 135px;\n    position: fixed;\n    height: 70px;\n  }\n}\n\n.todo-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.todo-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .todo-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .todo-form {\n    left: 5%;\n  }\n}\n@media (min-width: 805px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .todo-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .todo-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1215px) {\n  .todo-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .todo-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n.project-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.project-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .project-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .project-form {\n    left: 5%;\n  }\n}\n@media (min-width: 805px) {\n  .project-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .project-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .project-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1220px) {\n  .project-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .project-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "M PLUS Rounded 1c", Courier, sans-serif;\n}\n\nbody {\n  color: #eee;\n  background: #1c1c22;\n  position: relative;\n}\n\n.btn {\n  border: none;\n  background: #555;\n  height: 40px;\n  color: #eee;\n  border-radius: 8px;\n  font-size: 17px;\n}\n\n[class$=-submit] {\n  background: #1a1;\n}\n[class$=-submit]:hover {\n  background: #2b2;\n}\n[class$=-submit]:active {\n  background: #3b3;\n}\n\n[class$=-cancel] {\n  background: #a22;\n}\n[class$=-cancel]:hover {\n  background: #b33;\n}\n[class$=-cancel]:active {\n  background: #b44;\n}\n\n.btn-container {\n  margin-top: 15px;\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n}\n\n[class$=-label] {\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\ninput,\nselect {\n  min-width: 260px;\n  background: #484848;\n  color: white;\n  font-size: 16px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n}\n\ninput {\n  padding-left: 4px;\n}\n\nselect {\n  appearance: none;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #444;\n}\n\n.d-none {\n  display: none;\n}\n',""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var a=0;a<n.length;a++){var c=[].concat(n[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function d(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function a(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],c=e.base?a[0]+e.base:a[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var p=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,e),references:1}),o.push(l)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var d=r(n.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),d=n.childNodes;d[e]&&n.removeChild(d[e]),d.length?n.insertBefore(i,d[e]):n.appendChild(i)}}function u(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var f=null,m=0;function h(n,e){var t,o,r;if(e.singleton){var i=m++;t=f||(f=c(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=c(e),o=u.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=d(t[o]);i[r].references--}for(var c=a(n,e),s=0;s<t.length;s++){var l=d(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(846);function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function i(n){r(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(){return function(n){r(1,arguments);var e=i(n);return e.setHours(0,0,0,0),e}(Date.now())}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a=n=>({projectTitle:n.projectTitle||"Unnamed Project",todos:n.todos||[],addTodo:function(n){this.todos.push(n)},removeTodo:function(n){this.todos.splice(n,1)}}),c=(n=null)=>({todoTitle:n.todoTitle||"Unnamed Todo",description:n.description||"It's self-explanatory!",dueDate:n.dueDate||"No due date.",priority:n.priority||"None."});(()=>{const n=(()=>{let n={};return{publish:(e,t)=>{if(!n[e])return;let o;return n[e].forEach((n=>{o=n(t)})),o},subscribe:(e,t)=>{let o;return n[e]||(n[e]=[]),o=n[e].push(t)-1,{unsubscribe(){n[e].splice(o,1)}}}}})(),e=(()=>{const n=n=>document.querySelector(n),e=n=>document.getElementById(n),t=n=>document.querySelectorAll(n),o=n=>document.createElement(n),r=(n,e)=>((n,e)=>{for(let t in e)n.setAttribute(t,e[t]);return n})(o(n),e),i=(n,e)=>n.classList.add(e),a=(n,e)=>n.appendChild(e),c=(n,e)=>n.innerText=e,s=n=>n.style.display="none",l=n=>n.style.display="",p=n=>{n.value=""},u=()=>p(n("#projectTitle")),f=()=>{const e=n(".todos");for(;e.firstChild;)e.firstChild.remove()},m=()=>{n(".focused-title").innerText="",f()},h=e=>{if(f(),0==e.length)return;let o=function(e){const t=[],o=n(".todos");return e.forEach(((n,e)=>{const i=r("div",{class:`todo todo-${e}`});a(o,i);for(let t in n){let o=r("h4",{class:`${t}`}),d=r("h4",{class:`prop-header ${t} ${t}-${e}`});c(o,n[t]),c(d,b(t)),a(i,d),a(d,o)}t.push(i)})),t}(e);return t(".todo").forEach((n=>{const e=r("div",{class:"controls"}),t=r("div",{class:"todo-complete"}),o=r("div",{class:"todo-remove"});c(t,"✓"),c(o,"X"),a(e,t),a(e,o),a(n,e)})),o.forEach(((e,t)=>function(e,t){const o=r("div",{class:"todo-info",id:`todo-${e}`,"data-todo-active":!1});[n(`.description-${e}`),n(`.dueDate-${e}`),n(`.priority-${e}`)].forEach((n=>a(o,n))),a(t,o)}(t,e))),o};function b(n){return{todoTitle:"",description:"Description",dueDate:"Due",priority:"Priority"}[n]}const x=e=>{const t=n(".focused-title");return c(t,e.projectTitle),h(e.todos)};return{completeAllTodos:function(){t(".todo").forEach((n=>i(n,"completed")))},clearTodoForm:()=>{t(".todo-input").forEach((n=>p(n))),e("dueDate").value="",e("todoPriority").value=n("[selected='selected']").value},hideProjectForm:function(){s(n(".project-form"))},hideTodoForm:function(){s(n(".todo-form"))},changeViewOnSubmit:function(e){m(),u(),s(n(".project-form")),x(e)},toggleSidebarAndNav:function(){var e,t;!function(){let e=n(".nav");2===e.classList.length?e.classList.remove("nav-selected"):i(e,"nav-selected")}(),t="data-sidebar-active","true"==(e=n(".sidebar")).getAttribute(t)?e.setAttribute(t,!1):e.setAttribute(t,!0)},clearProjectForm:u,id:e,clearFocus:m,printProjectToFocus:x,printProjectToSidebar:e=>{const t=n(".projects"),o=r("div",{class:"project"}),i=r("h3",{class:"project-title",id:`${e.projectTitle}`});return c(i,e.projectTitle),a(t,o),a(o,i),o},printTodos:h,createProjectForm:()=>{const e=n("body"),t=r("div",{class:"project-form"}),i=o("h2"),d=r("div",{class:"form-wrapper"}),l=r("label",{for:"projectTitle",class:"project-label"}),p=r("input",{type:"text",class:"project-title",id:"projectTitle",name:"Project: "}),u=r("div",{class:"btn-container"}),f=r("button",{class:"btn project-submit"}),m=r("button",{class:"btn project-cancel"});c(i,"Create a new project"),c(l,"Project Title"),c(f,"Submit"),c(m,"Cancel"),[[e,t],[t,i],[t,d],[d,l],[d,p],[t,u],[u,m],[u,f]].forEach((n=>a(n[0],n[1]))),s(t)},showProjectForm:()=>l(n(".project-form")),createTodoForm:()=>{const e=n("body"),t=r("div",{class:"todo-form"}),i=o("h2"),l=r("div",{class:"title-info"}),p=r("label",{for:"todoTitle",class:"todo-label"}),u=r("input",{type:"text",id:"todoTitle",class:"todo-input",placeholder:"I need to make a sandwich..."}),f=r("div",{class:"desc-info"}),m=r("label",{for:"todoDesc",class:"todo-label"}),h=r("input",{type:"text",id:"todoDesc",class:"todo-input",placeholder:"It will be a peanut butter & jelly sandwich."}),b=r("div",{class:"priority-container"}),x=r("label",{for:"todoPriority",class:"todo-label"}),v=r("select",{name:"priority",id:"todoPriority"}),g=r("option",{value:"low",selected:"selected"}),w=r("option",{value:"medium"}),j=r("option",{value:"high"}),y=r("div",{class:"duedate-container"}),T=r("label",{for:"dueDate",class:"todo-label"}),k=r("input",{id:"dueDate",class:"todo-date",type:"date",value:d(),min:d()}),P=r("div",{class:"btn-container"}),E=r("button",{class:"btn todo-submit"}),F=r("button",{class:"btn todo-cancel"});c(i,"Create a new todo"),c(p,"Todo"),c(m,"Description"),c(x,"Priority"),c(v,"Priority"),c(g,"Low"),c(w,"Medium"),c(j,"High"),c(T,"Due Date"),c(E,"Submit"),c(F,"Cancel"),[[e,t],[t,i],[t,l],[l,p],[l,u],[t,f],[f,m],[f,h],[t,b],[b,x],[b,v],[v,g],[v,w],[v,j],[t,y],[y,T],[y,k],[t,P],[P,F],[P,E]].forEach((n=>a(n[0],n[1]))),s(t)},showTodoForm:()=>l(n(".todo-form")),returnInfoFromTodoForm:()=>({todoTitle:n("#todoTitle").value,description:n("#todoDesc").value,dueDate:n("#dueDate").value,priority:n("#todoPriority").value}),returnInfoFromProjectForm:()=>({projectTitle:n("#projectTitle").value}),$:n}})();let t,o=[];function r(n){!function(n){n.children&&n.children[1].firstChild.addEventListener("click",(()=>{n.classList.toggle("completed")}))}(n),function(n){if(!n.children)return;let e={todoTitle:n.firstChild.firstChild.innerText,description:n.lastChild.children[0].lastChild.innerText,dueDate:n.lastChild.children[1].lastChild.innerText,priority:n.lastChild.children[2].lastChild.innerText};n.children[1].children[1].addEventListener("click",(()=>{let t=function(n,e){let t;return e.forEach(((e,o)=>{(function(n,e){e.todoTitle==n.todoTitle&&e.description==n.description&&e.dueDate==n.dueDate&&e.priority})(n,e)&&(t=o)})),t}(e,s().todos);s().removeTodo(t),n.remove()}))}(n)}function i(n){t=n}function s(){return t}function l(n,t){t.addEventListener("click",(()=>{i(n),e.toggleSidebarAndNav();let t=e.printProjectToFocus(n);t&&(p(t),r(t))}))}function p(n){n.forEach((n=>{n.firstChild.addEventListener("click",(()=>{e.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))}[["startApp",e.createTodoForm],["startApp",e.createProjectForm],["startApp",function(){e.$(".project-submit").addEventListener("click",(()=>{let n=function(){let n=e.returnInfoFromProjectForm(),t=a(n),r=e.printProjectToSidebar(t);return o[o.push({project:t,elem:r})-1]}();i(n.project),e.changeViewOnSubmit(n.project),l(n.project,n.elem)})),e.$(".project-cancel").addEventListener("click",(()=>{e.clearProjectForm(),e.hideProjectForm()}))}],["startApp",function(){const n=c({todoTitle:"Make another todo",description:"add a description to each todo.",dueDate:"12/25/2020",priority:"high"}),t=c({todoTitle:"Delete the first todo",description:"which would then make this the first todo...",dueDate:"3/14/2021",priority:"medium"}),o=a({projectTitle:"Make a todo list",todos:[n,t]}),r={project:o,elem:e.printProjectToSidebar(o)};i(o),e.printProjectToFocus(r.project),l(r.project,r.elem)}],["startApp",function(){e.$(".new-todo").addEventListener("click",e.showTodoForm),e.$(".complete-all").addEventListener("click",e.completeAllTodos),e.$(".delete-all").addEventListener("click",(()=>{0!=s().todos.length&&confirm("are you sure?")&&(s().todos=[],e.printProjectToFocus(s()))}))}],["startApp",function(){e.$(".todo-submit").addEventListener("click",(()=>{let n=e.returnInfoFromTodoForm(),t=c(n);s().addTodo(t),p(e.printProjectToFocus(s())),e.hideTodoForm(),e.clearTodoForm()})),e.$(".todo-cancel").addEventListener("click",(()=>{e.hideTodoForm(),e.clearTodoForm()}))}],["newProject",e.showProjectForm],["newProject",e.toggleSidebarAndNav]].forEach((e=>{n.subscribe(e[0],e[1])})),e.$(".nav").addEventListener("click",e.toggleSidebarAndNav),e.id("createProject").addEventListener("click",n.publish.bind(void 0,"newProject")),n.publish("startApp"),document.querySelectorAll(".todo").forEach((n=>{n.firstChild.addEventListener("click",(()=>{e.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))})()})()})();