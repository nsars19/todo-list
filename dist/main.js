(()=>{"use strict";var e={846:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap);"]),r.push([e.id,'header {\n  user-select: none;\n  background: #1d1e2f;\n  padding: 10px 20px;\n  font-size: 1.6em;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n}\nheader .title h1 {\n  font-family: "Righteous", cursive;\n}\nheader .nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  header {\n    font-size: 1em;\n  }\n  header .nav,\nheader .nav-selected {\n    width: 30px;\n    height: 27px;\n    display: inline-block;\n    justify-self: end;\n    display: grid;\n    place-items: center;\n    transition: all 2.5s ease-in;\n  }\n  header .nav > *,\nheader .nav-selected > * {\n    height: 4px;\n    width: 25px;\n    border-radius: 20px;\n    border: 1px solid white;\n    background-color: white;\n  }\n  header .nav-selected {\n    position: relative;\n    translate: all 0.2s transform;\n  }\n  header .nav-selected #bar1 {\n    position: absolute;\n    transform: rotate(-0.125turn);\n  }\n  header .nav-selected #bar2 {\n    display: none;\n  }\n  header .nav-selected #bar3 {\n    position: absolute;\n    transform: rotate(0.125turn);\n  }\n}\n\n.sidebar {\n  position: absolute;\n  right: 0;\n  z-index: 999;\n  height: calc(100vh - 85px);\n  width: 35%;\n  max-width: 350px;\n  border-left: 2px solid #333;\n  background-color: #25252c;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: calc(100vh - 61px);\n  }\n}\n.sidebar .new-project:hover,\n.sidebar .projects > *:hover {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active,\n.sidebar .projects > *:active {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active .project-title,\n.sidebar .new-project:active h2,\n.sidebar .projects > *:active .project-title,\n.sidebar .projects > *:active h2 {\n  text-shadow: none;\n}\n\n@media (max-width: 768px) {\n  [data-sidebar-active=true] {\n    width: 300px;\n    background-color: #25252c;\n  }\n\n  [data-sidebar-active=false] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  [data-sidebar-active=true] {\n    min-width: 100vw;\n  }\n}\n.new-project {\n  padding: 15px;\n  font-size: 1em;\n  text-shadow: 1px 1px 3px #000;\n}\n.new-project .icon {\n  font-size: 1.2em;\n}\n\n.projects {\n  display: grid;\n  text-shadow: 1px 1px 3px #000;\n}\n.projects .project {\n  padding: 10px 40px 10px 15px;\n  position: relative;\n}\n\n.project-focused {\n  display: grid;\n  margin: 30px;\n  width: 72.5%;\n}\n.project-focused .title {\n  padding-bottom: 20px;\n  font-size: 2.1em;\n}\n\n.todos {\n  display: grid;\n  border-bottom: none;\n  margin-top: 20px;\n  max-width: 400px;\n}\n.todos .todo {\n  padding-left: 8px;\n  padding: 8px;\n  border: 1px solid #333;\n  border-bottom: none;\n  max-width: 400px;\n}\n.todos .todo:last-child {\n  border-bottom: 1px solid #333;\n}\n.todos .prop-header {\n  font-size: 0.87em;\n}\n.todos .prop-header .todoTitle {\n  font-size: 1.2em;\n}\n.todos .description,\n.todos .dueDate,\n.todos .priority {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n[data-todo-active=true] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: margin-top 0.3s, margin-bottom 0.2s;\n}\n[data-todo-active=true] > * {\n  padding: 8px;\n  padding-left: 5px;\n}\n\n[data-todo-active=false] {\n  height: 0;\n  width: 0;\n}\n[data-todo-active=false] > * {\n  display: none;\n}\n\n.bottom-controls {\n  position: fixed;\n  background: #1d1e2f;\n  bottom: 0;\n  width: 100%;\n  overflow-x: hidden;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 80px 140px 110px;\n  align-items: center;\n  gap: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px #000;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bottom-controls > * {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.bottom-controls > *:hover {\n  background: #dbdbdb1a;\n}\n.bottom-controls > *:active {\n  background: #dbdbdb1a;\n}\n@media (max-width: 768px) {\n  .bottom-controls {\n    height: 50px;\n  }\n  .bottom-controls > * {\n    font-size: 20px;\n  }\n}\n@media (min-width: 768.01px) {\n  .bottom-controls {\n    grid-template-columns: 115px 180px 135px;\n    position: fixed;\n    height: 70px;\n  }\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "M PLUS Rounded 1c", Courier, sans-serif;\n}\n\nbody {\n  color: #eee;\n  background: #1c1c22;\n  position: relative;\n}\n\n.d-none {\n  display: none;\n}\n',""]);const i=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},379:(e,t,n)=>{var o,r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function d(e,t){for(var n={},o=[],r=0;r<e.length;r++){var d=e[r],c=t.base?d[0]+t.base:d[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var p=a(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:m(u,t),references:1}),o.push(l)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function u(e,t,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function m(e,t){var n,o,r;if(t.singleton){var i=h++;n=f||(f=c(t)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=c(t),o=u.bind(null,n,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var n=d(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var r=a(n[o]);i[r].references--}for(var c=d(e,t),s=0;s<n.length;s++){var l=a(n[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),o=n(846);function r(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function i(e){r(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(){return function(e){r(1,arguments);var t=i(e);return t.setHours(0,0,0,0),t}(Date.now())}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const d=e=>({projectTitle:e.projectTitle||"",todos:e.todos||[],addTodo:function(e){this.todos.push(e)}}),c=(e=null)=>({todoTitle:e.todoTitle||"",description:e.description||"",dueDate:e.dueDate||"",priority:e.priority||""});(()=>{const e=(()=>{let e={};return{publish:(t,n)=>{if(!e[t])return;let o;return e[t].forEach((e=>{o=e(n)})),o},subscribe:(t,n)=>{let o;return e[t]||(e[t]=[]),o=e[t].push(n)-1,{unsubscribe(){e[t].splice(o,1)}}}}})(),t=(()=>{const e=e=>document.querySelector(e),t=e=>document.createElement(e),n=(e,t)=>{for(let n in t)e.setAttribute(n,t[n]);return e},o=(e,t)=>{"true"==e.getAttribute(t)?e.setAttribute(t,!1):e.setAttribute(t,!0)},r=(e,o)=>{let r=t(e);return n(r,o)},i=(e,t)=>e.classList.add(t),d=(e,t)=>e.classList.remove(t),c=(e,t)=>e.appendChild(t),s=(e,t)=>e.innerText=t,l=e=>e.style.display="none",p=e=>e.style.display="",u=e=>{e.value=""},f=e=>{e.childNodes.forEach((e=>{"DIV"===e.nodeName&&e.childNodes.length>1&&f(e),"INPUT"==e.nodeName&&u(e)}))},h=()=>u(e("#projectTitle")),m=()=>p(e(".project-form")),b=()=>p(e(".todo-form")),v=()=>{const n=e("body"),o=r("div",{class:"project-form"}),i=t("h2"),a=r("div",{class:"form-wrapper"}),d=r("label",{for:"projectTitle",class:"project-label"}),p=r("input",{type:"text",class:"project-title",id:"projectTitle",name:"Project: "}),u=r("div",{class:"btn-container"}),f=r("button",{class:"btn project-submit"}),h=r("button",{class:"btn project-cancel"});s(i,"Create a new project"),s(d,"Project Title"),s(f,"Submit"),s(h,"Cancel"),[[n,o],[o,i],[o,a],[a,d],[a,p],[o,u],[u,f],[u,h]].forEach((e=>c(e[0],e[1]))),l(o)},g=()=>{const n=e("body"),o=r("div",{class:"todo-form"}),i=t("h2"),d=r("div",{class:"title-info"}),p=r("label",{for:"todoTitle",class:"todo-label"}),u=r("input",{type:"text",id:"todoTitle",class:"todo-input",placeholder:"I need to make a sandwich..."}),f=r("div",{class:"desc-info"}),h=r("label",{for:"todoDesc",class:"todo-label"}),m=r("input",{type:"text",id:"todoDesc",class:"todo-input",placeholder:"It will be a peanut butter & jelly sandwich."}),b=r("div",{class:"priority-container"}),v=r("label",{for:"todoPriority",class:"todo-label"}),g=r("select",{name:"priority",id:"todoPriority"}),x=r("option",{value:"low",selected:"selected"}),j=r("option",{value:"medium"}),w=r("option",{value:"high"}),y=r("div",{class:"duedate-container"}),T=r("label",{for:"dueDate",class:"todo-label"}),P=r("input",{id:"dueDate",class:"todo-form",type:"date",value:a(),min:a()}),F=r("div",{class:"btn-container"}),E=r("button",{class:"btn todo-submit"}),S=r("button",{class:"btn todo-cancel"});s(i,"Create a new todo"),s(p,"Todo"),s(h,"Desription"),s(v,"Priority"),s(g,"Priority"),s(x,"Low"),s(j,"Medium"),s(w,"High"),s(T,"Due Date"),s(E,"Submit"),s(S,"Cancel"),[[n,o],[o,i],[o,d],[d,p],[d,u],[o,f],[f,h],[f,m],[o,b],[b,v],[b,g],[g,x],[g,j],[g,w],[o,y],[y,T],[y,P],[o,F],[F,E],[F,S]].forEach((e=>c(e[0],e[1]))),l(o)},x=()=>{const t=e(".todos");for(;t.firstChild;)t.firstChild.remove()},j=()=>{e(".focused-title").innerText="",x()},w=t=>{if(x(),0==t.length)return;let n=function(t){const n=[],o=e(".todos");return t.forEach(((e,t)=>{const i=r("div",{class:`todo todo-${t}`});c(o,i);for(let n in e){let o=r("h4",{class:`${n}`}),a=r("h4",{class:`prop-header ${n}-${t}`});s(o,e[n]),s(a,y(n)),c(i,a),c(a,o)}n.push(i)})),n}(t);return n.forEach(((t,n)=>function(t,n){const o=r("div",{class:"todo-info",id:`todo-${t}`,"data-todo-active":!1});[e(`.description-${t}`),e(`.dueDate-${t}`),e(`.priority-${t}`)].forEach((e=>c(o,e))),c(n,o)}(n,t))),n};function y(e){return{todoTitle:"",description:"Description",dueDate:"Due",priority:"Priority"}[e]}const T=t=>{const n=e(".focused-title");return s(n,t.projectTitle),w(t.todos)};return{clearTodoForm:()=>{document.querySelectorAll("todo-input").forEach((e=>u(e)))},hideProjectForm:function(){l(e(".project-form"))},hideTodoForm:function(){l(e(".todo-form"))},changeViewOnSubmit:function(t){j(),h(),l(e(".project-form")),T(t)},toggleSidebarAndNav:function(){!function(){let t=e(".nav");2===t.classList.length?d(t,"nav-selected"):i(t,"nav-selected")}(),function(){let t=e(".sidebar");o(t,"data-sidebar-active")}()},clearProjectForm:h,id:e=>document.getElementById(e),removeElement:e=>e.remove(),clearFocus:j,printProjectToFocus:T,printProjectToSidebar:t=>{const n=e(".projects"),o=r("div",{class:"project"}),i=r("h3",{class:"project-title",id:`${t.projectTitle}`});return s(i,t.projectTitle),c(n,o),c(o,i),o},printTodos:w,createProjectForm:v,showProjectForm:m,createAndShowProjectForm:()=>{v(),m()},createTodoForm:g,showTodoForm:b,createAndShowTodoForm:()=>{g(),b()},clearChildForms:f,returnInfoFromTodoForm:()=>({todoTitle:e("#todoTitle").value,description:e("#todoDesc").value,dueDate:e("#dueDate").value,priority:e("#todoPriority").value}),returnInfoFromProjectForm:()=>({projectTitle:e("#projectTitle").value}),hide:l,show:p,$:e,create:t,addAttributes:n,addAttr:(e,t,n)=>e.setAttribute(t,n),toggleAttr:o,createWith:r,addClass:i,removeClass:d,append:c,removeChildren:e=>{for(;e.firstChild;)e.firstChild.remove()},setText:s}})();let n,o=[];function r(e){n=e}function i(){return n}function s(e,n){n.addEventListener("click",(()=>{r(e),t.toggleSidebarAndNav();let n=t.printProjectToFocus(e);n&&l(n)}))}function l(e){e.forEach((e=>{e.addEventListener("click",(()=>{t.toggleAttr(e.lastChild,"data-todo-active")}))}))}[["startApp",t.createTodoForm],["startApp",t.createProjectForm],["startApp",function(){t.$(".project-submit").addEventListener("click",(()=>{let e=function(){let e=t.returnInfoFromProjectForm(),n=d(e),r=t.printProjectToSidebar(n);return o[o.push({project:n,elem:r})-1]}();r(e),t.changeViewOnSubmit(e.project),s(e.project,e.elem)})),t.$(".project-cancel").addEventListener("click",(()=>{t.clearProjectForm(),t.hideProjectForm()}))}],["startApp",function(){const e=c({todoTitle:"Make another todo",description:"add a description to each todo.",dueDate:"12/25/2020",priority:"high"}),n=c({todoTitle:"Delete the first todo",description:"which would then make this the first todo...",dueDate:"3/14/2021",priority:"medium"}),o=d({projectTitle:"Make a todo list",todos:[e,n]}),i={project:o,elem:t.printProjectToSidebar(o)};r(o),t.printProjectToFocus(i.project),s(i.project,i.elem)}],["startApp",function(){t.$(".new-todo").addEventListener("click",t.showTodoForm),t.$(".todo-submit").addEventListener("click",(()=>{let e=t.returnInfoFromTodoForm(),n=c(e);i().addTodo(n);let o=t.printProjectToFocus(i());l([o[o.length-1]])})),t.$(".todo-cancel").addEventListener("click",(()=>{t.hideTodoForm(),t.clearTodoForm()}))}],["newProject",t.showProjectForm],["newProject",t.toggleSidebarAndNav]].forEach((t=>{e.subscribe(t[0],t[1])})),t.$(".nav").addEventListener("click",t.toggleSidebarAndNav),t.id("createProject").addEventListener("click",e.publish.bind(void 0,"newProject")),e.publish("startApp"),document.querySelectorAll(".todo").forEach((e=>{let n=e.lastChild;e.addEventListener("click",(()=>{t.toggleAttr(n,"data-todo-active")}))}))})()})()})();