(()=>{"use strict";var n={846:(n,t,e)=>{e.d(t,{Z:()=>i});var o=e(645),r=e.n(o)()((function(n){return n[1]}));r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap);"]),r.push([n.id,'header {\n  user-select: none;\n  background: #1d1e2f;\n  background: #23243d;\n  padding: 10px 20px;\n  font-size: 1.6em;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n}\nheader .title h1 {\n  font-family: "Righteous", cursive;\n}\nheader .nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  header {\n    font-size: 1em;\n  }\n  header .nav,\nheader .nav-selected {\n    width: 30px;\n    height: 27px;\n    display: inline-block;\n    justify-self: end;\n    display: grid;\n    place-items: center;\n    transition: all 2.5s ease-in;\n  }\n  header .nav > *,\nheader .nav-selected > * {\n    height: 4px;\n    width: 25px;\n    border-radius: 20px;\n    border: 1px solid white;\n    background-color: white;\n  }\n  header .nav-selected {\n    position: relative;\n    translate: all 0.2s transform;\n  }\n  header .nav-selected #bar1 {\n    position: absolute;\n    transform: rotate(-0.125turn);\n  }\n  header .nav-selected #bar2 {\n    display: none;\n  }\n  header .nav-selected #bar3 {\n    position: absolute;\n    transform: rotate(0.125turn);\n  }\n}\n\n.sidebar {\n  position: absolute;\n  right: 0;\n  z-index: 999;\n  height: calc(100vh - 85px);\n  width: 35%;\n  max-width: 350px;\n  border-left: 2px solid #333;\n  background-color: #25252c;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: calc(100vh - 61px);\n  }\n}\n.sidebar .new-project:hover,\n.sidebar .projects > *:hover {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active,\n.sidebar .projects > *:active {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:active .project-title,\n.sidebar .new-project:active h2,\n.sidebar .projects > *:active .project-title,\n.sidebar .projects > *:active h2 {\n  text-shadow: none;\n}\n\n@media (max-width: 768px) {\n  [data-sidebar-active=true] {\n    width: 300px;\n    background-color: #25252c;\n  }\n\n  [data-sidebar-active=false] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  [data-sidebar-active=true] {\n    min-width: 100vw;\n  }\n}\n.new-project {\n  padding: 15px;\n  font-size: 1em;\n  text-shadow: 1px 1px 3px #000;\n}\n.new-project .icon {\n  font-size: 1.2em;\n}\n\n.projects {\n  display: grid;\n  text-shadow: 1px 1px 3px #000;\n}\n.projects .project {\n  padding: 10px 40px 10px 15px;\n  position: relative;\n}\n\n.project-focused {\n  display: grid;\n  margin: 30px;\n  width: 72.5%;\n}\n.project-focused .title {\n  padding-bottom: 20px;\n  font-size: 2.1em;\n}\n\n.todos {\n  display: grid;\n  border-bottom: none;\n  margin-top: 20px;\n  max-width: 400px;\n}\n.todos .todo {\n  padding-left: 8px;\n  padding: 8px;\n  border: 1px solid #333;\n  border-bottom: none;\n  max-width: 400px;\n  position: relative;\n}\n.todos .todo:last-child {\n  border-bottom: 1px solid #333;\n}\n.todos .prop-header {\n  font-size: 0.87em;\n}\n.todos .prop-header .todoTitle {\n  max-width: 300px;\n  font-size: 1.2em;\n  user-select: none;\n}\n@media (max-width: 540px) {\n  .todos .prop-header .todoTitle {\n    max-width: 250px;\n  }\n}\n@media (max-width: 440px) {\n  .todos .prop-header .todoTitle {\n    max-width: 190px;\n  }\n}\n.todos .description,\n.todos .dueDate,\n.todos .priority {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.controls {\n  position: absolute;\n  top: 0;\n  right: -15px;\n  height: 40px;\n  width: 60px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  gap: 3px;\n  font-weight: bolder;\n  user-select: none;\n  text-shadow: 1px 2px 1px black;\n}\n.controls .todo-complete {\n  font-size: 23px;\n  color: #1a1;\n}\n.controls .todo-complete:hover {\n  color: #2b2;\n}\n.controls .todo-remove {\n  font-size: 21px;\n  color: #a22;\n}\n.controls .todo-remove:hover {\n  color: #b33;\n}\n.controls .todo-edit {\n  margin-left: 13px;\n  transform: rotate(90deg);\n}\n\n[data-todo-active=true] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: margin-top 0.07s ease-out, margin-bottom 0.05s 0.03s ease-out;\n}\n[data-todo-active=true] > * {\n  padding: 8px;\n  padding-left: 5px;\n}\n\n[data-todo-active=false] {\n  height: 0;\n  width: 0;\n}\n[data-todo-active=false] > * {\n  display: none;\n}\n\n.bottom-controls {\n  position: fixed;\n  background: #1d1e2f;\n  background: #23243d;\n  bottom: 0;\n  width: 100%;\n  overflow-x: hidden;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 80px 140px 110px;\n  align-items: center;\n  gap: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px #000;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bottom-controls > * {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.bottom-controls > *:hover {\n  background: #dbdbdb1a;\n}\n.bottom-controls > *:active {\n  background: #dbdbdb1a;\n}\n@media (min-width: 390px) and (max-width: 540px) {\n  .bottom-controls {\n    overflow-x: hidden;\n    justify-content: space-around;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .bottom-controls {\n    height: 50px;\n  }\n  .bottom-controls > * {\n    font-size: 20px;\n  }\n}\n@media (min-width: 768.01px) {\n  .bottom-controls {\n    grid-template-columns: 115px 180px 135px;\n    position: fixed;\n    height: 70px;\n  }\n}\n\n.todo-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.todo-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .todo-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .todo-form {\n    left: 5%;\n  }\n}\n@media (min-width: 769px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 805px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .todo-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .todo-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1215px) {\n  .todo-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .todo-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n.project-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.project-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .project-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .project-form {\n    left: 5%;\n  }\n}\n@media (min-width: 805px) {\n  .project-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .project-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .project-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1220px) {\n  .project-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .project-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "M PLUS Rounded 1c", Courier, sans-serif;\n}\n\nbody {\n  color: #eee;\n  background: #1c1c22;\n  position: relative;\n}\n\n.btn {\n  border: none;\n  background: #555;\n  height: 40px;\n  color: #eee;\n  border-radius: 8px;\n  font-size: 17px;\n  display: grid;\n  place-items: center;\n}\n\n[class$=-submit] {\n  background: #1a1;\n}\n[class$=-submit]:hover {\n  background: #2b2;\n}\n[class$=-submit]:active {\n  background: #3b3;\n}\n\n[class$=-cancel] {\n  background: #a22;\n}\n[class$=-cancel]:hover {\n  background: #b33;\n}\n[class$=-cancel]:active {\n  background: #b44;\n}\n\n.btn-container {\n  margin-top: 15px;\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n}\n\n[class$=-label] {\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\ninput,\nselect {\n  min-width: 260px;\n  background: #484848;\n  color: white;\n  font-size: 16px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n  padding-left: 4px;\n}\n\ninput {\n  padding-left: 4px;\n}\n\nselect {\n  appearance: none;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #444;\n}\n\n.d-none {\n  display: none;\n}\n',""]);const i=r},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&r[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),t.push(c))}},t}},379:(n,t,e)=>{var o,r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function a(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function d(n,t){for(var e={},o=[],r=0;r<n.length;r++){var d=n[r],c=t.base?d[0]+t.base:d[0],s=e[c]||0,l="".concat(c," ").concat(s);e[c]=s+1;var p=a(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:h(u,t),references:1}),o.push(l)}return o}function c(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var s,l=(s=[],function(n,t){return s[n]=t,s.filter(Boolean).join("\n")});function p(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}function u(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,f=0;function h(n,t){var e,o,r;if(t.singleton){var i=f++;e=m||(m=c(t)),o=p.bind(null,e,i,!1),r=p.bind(null,e,i,!0)}else e=c(t),o=u.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=d(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=a(e[o]);i[r].references--}for(var c=d(n,t),s=0;s<e.length;s++){var l=a(e[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=c}}}}},t={};function e(o){if(t[o])return t[o].exports;var r=t[o]={id:o,exports:{}};return n[o](r,r.exports,e),r.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var o in t)e.o(t,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:t[o]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n=e(379),t=e.n(n),o=e(846);function r(n,t){if(t.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+t.length+" present")}function i(n){r(1,arguments);var t=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===t?new Date(n.getTime()):"number"==typeof n||"[object Number]"===t?new Date(n):("string"!=typeof n&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(){return function(n){r(1,arguments);var t=i(n);return t.setHours(0,0,0,0),t}(Date.now())}t()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const d=n=>({projectTitle:n.projectTitle||"Unnamed Project",todos:n.todos||[],addTodo:function(n){this.todos.push(n)},removeTodo:function(n){this.todos.splice(n,1)}});function c(n,t){for(var e=n<0?"-":"",o=Math.abs(n).toString();o.length<t;)o="0"+o;return e+o}const s={y:function(n,t){var e=n.getUTCFullYear(),o=e>0?e:1-e;return c("yy"===t?o%100:o,t.length)},M:function(n,t){var e=n.getUTCMonth();return"M"===t?String(e+1):c(e+1,2)},d:function(n,t){return c(n.getUTCDate(),t.length)},a:function(n,t){var e=n.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":case"aaa":return e.toUpperCase();case"aaaaa":return e[0];case"aaaa":default:return"am"===e?"a.m.":"p.m."}},h:function(n,t){return c(n.getUTCHours()%12||12,t.length)},H:function(n,t){return c(n.getUTCHours(),t.length)},m:function(n,t){return c(n.getUTCMinutes(),t.length)},s:function(n,t){return c(n.getUTCSeconds(),t.length)},S:function(n,t){var e=t.length,o=n.getUTCMilliseconds();return c(Math.floor(o*Math.pow(10,e-3)),t.length)}};var l=6e4;function p(n){return n.getTime()%l}function u(n){var t=new Date(n.getTime()),e=Math.ceil(t.getTimezoneOffset());t.setSeconds(0,0);var o=e>0?(l+p(t))%l:p(t);return e*l+o}function m(n){r(1,arguments);var t=i(n);return!isNaN(t)}function f(n){if(null===n||!0===n||!1===n)return NaN;var t=Number(n);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function h(n,t){r(2,arguments);var e=i(n).getTime(),o=f(t);return new Date(e+o)}function g(n,t){r(2,arguments);var e=f(t);return h(n,-e)}var b=/(\w)\1*|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,v=/''/g,w=/[a-zA-Z]/;function j(n,t){r(2,arguments);var e=String(t),o=i(n);if(!m(o))throw new RangeError("Invalid time value");var a=u(o),d=g(o,a),c=e.match(b).map((function(n){if("''"===n)return"'";var t=n[0];if("'"===t)return y(n);var e=s[t];if(e)return e(d,n,null,{});if(t.match(w))throw new RangeError("Format string contains an unescaped latin alphabet character `"+t+"`");return n})).join("");return c}function y(n){return n.match(x)[1].replace(v,"'")}const T=(n=null)=>({todoTitle:n.todoTitle||"Unnamed Todo",description:n.description||"It's self-explanatory!",dueDate:n.dueDate||j(a(),"M/dd/y"),priority:n.priority||"None."});(()=>{const n=(()=>{let n={};return{publish:(t,e)=>{if(!n[t])return;let o;return n[t].forEach((n=>{o=n(e)})),o},subscribe:(t,e)=>{let o;return n[t]||(n[t]=[]),o=n[t].push(e)-1,{unsubscribe(){n[t].splice(o,1)}}}}})(),t=(()=>{const n=n=>document.querySelector(n),t=n=>document.getElementById(n),e=n=>document.querySelectorAll(n),o=n=>document.createElement(n),r=(n,t)=>{"true"==n.getAttribute(t)?n.setAttribute(t,!1):n.setAttribute(t,!0)},i=(n,t)=>((n,t)=>{for(let e in t)n.setAttribute(e,t[e]);return n})(o(n),t),d=(n,t)=>n.classList.add(t),c=(n,t)=>n.appendChild(t),s=(n,t)=>n.innerText=t,l=n=>n.style.display="none",p=n=>n.style.display="",u=n=>{n.value=""},m=()=>u(n("#projectTitle")),f=()=>p(n(".todo-form")),h=()=>{const t=n(".todos");for(;t.firstChild;)t.firstChild.remove()},g=()=>{n(".focused-title").innerText="",h()},b=t=>{if(h(),0==t.length)return;let o=function(t){const e=[],o=n(".todos");return t.forEach(((n,t)=>{const r=i("div",{class:`todo todo-${t}`});c(o,r);for(let e in n){let o=i("h4",{class:`${e}`}),a=i("h4",{class:`prop-header ${e} ${e}-${t}`});s(o,n[e]),s(a,x(e)),c(r,a),c(a,o)}e.push(r)})),e}(t);return e(".todo").forEach((n=>{const t=i("div",{class:"controls"}),e=i("div",{class:"todo-complete"}),o=i("div",{class:"todo-remove"}),r=i("div",{class:"todo-edit"});s(r,"✏️"),s(e,"✓"),s(o,"X"),c(t,e),c(t,o),c(t,r),c(n,t)})),o.forEach(((t,e)=>function(t,e){const o=i("div",{class:"todo-info",id:`todo-${t}`,"data-todo-active":!1});[n(`.description-${t}`),n(`.dueDate-${t}`),n(`.priority-${t}`)].forEach((n=>c(o,n))),c(e,o)}(e,t))),o};function x(n){return{todoTitle:"",description:"Description",dueDate:"Due",priority:"Priority"}[n]}const v=t=>{const e=n(".focused-title");return s(e,t.projectTitle),b(t.todos)};function w(){l(n(".todo-form"))}return{hideEditForm:function(){n(".todo-submit").classList.toggle("d-none"),n(".todo-edit-submit").classList.toggle("d-none"),n(".todo-cancel").classList.toggle("d-none"),n(".todo-edit-cancel").classList.toggle("d-none"),w()},showEditForm:function(){n(".todo-submit").classList.toggle("d-none"),n(".todo-edit-submit").classList.toggle("d-none"),n(".todo-cancel").classList.toggle("d-none"),n(".todo-edit-cancel").classList.toggle("d-none"),f()},populateTodoForm:function(n){t("todoTitle").value=n.todoTitle,t("todoDesc").value=n.description,t("todoPriority").value=n.priority,t("dueDate").value=new Date(Date.parse(n.dueDate)).toISOString().substr(0,10)},getTodoInnerText:function(n){return{todoTitle:n.firstChild.firstChild.innerText,description:n.lastChild.children[0].lastChild.innerText,dueDate:n.lastChild.children[1].lastChild.innerText,priority:n.lastChild.children[2].lastChild.innerText}},toggleAttr:r,completeAllTodos:function(){e(".todo").forEach((n=>d(n,"completed")))},clearTodoForm:()=>{e(".todo-input").forEach((n=>u(n))),t("dueDate").value="",t("todoPriority").value=n("[selected='selected']").value},hideProjectForm:function(){l(n(".project-form"))},hideTodoForm:w,changeViewOnSubmit:function(t){g(),m(),l(n(".project-form")),v(t)},toggleSidebarAndNav:function(){!function(){let t=n(".nav");2===t.classList.length?t.classList.remove("nav-selected"):d(t,"nav-selected")}(),function(){let t=n(".sidebar");r(t,"data-sidebar-active")}()},clearProjectForm:m,id:t,clearFocus:g,printProjectToFocus:v,printProjectToSidebar:t=>{const e=n(".projects"),o=i("div",{class:"project"}),r=i("h3",{class:"project-title",id:`${t.projectTitle}`});return s(r,t.projectTitle),c(e,o),c(o,r),o},printTodos:b,createProjectForm:()=>{const t=n("body"),e=i("div",{class:"project-form"}),r=o("h2"),a=i("div",{class:"form-wrapper"}),d=i("label",{for:"projectTitle",class:"project-label"}),p=i("input",{type:"text",class:"project-title",id:"projectTitle",name:"Project: "}),u=i("div",{class:"btn-container"}),m=i("button",{class:"btn project-submit"}),f=i("button",{class:"btn project-cancel"});s(r,"Create a new project"),s(d,"Project Title"),s(m,"Submit"),s(f,"Cancel"),[[t,e],[e,r],[e,a],[a,d],[a,p],[e,u],[u,f],[u,m]].forEach((n=>c(n[0],n[1]))),l(e)},showProjectForm:()=>p(n(".project-form")),createTodoForm:()=>{const t=n("body"),e=i("div",{class:"todo-form"}),r=o("h2"),d=i("div",{class:"title-info"}),p=i("label",{for:"todoTitle",class:"todo-label"}),u=i("input",{type:"text",id:"todoTitle",class:"todo-input",placeholder:"I need to make a sandwich..."}),m=i("div",{class:"desc-info"}),f=i("label",{for:"todoDesc",class:"todo-label"}),h=i("input",{type:"text",id:"todoDesc",class:"todo-input",placeholder:"It will be a peanut butter & jelly sandwich."}),g=i("div",{class:"priority-container"}),b=i("label",{for:"todoPriority",class:"todo-label"}),x=i("select",{name:"priority",id:"todoPriority"}),v=i("option",{value:"low",selected:"selected"}),w=i("option",{value:"medium"}),j=i("option",{value:"high"}),y=i("div",{class:"duedate-container"}),T=i("label",{for:"dueDate",class:"todo-label"}),k=i("input",{id:"dueDate",class:"todo-date",type:"date",value:a(),min:a()}),F=i("div",{class:"btn-container"}),E=i("button",{class:"btn todo-submit"}),C=i("button",{class:"btn todo-cancel"}),D=i("button",{class:"btn todo-edit-submit d-none"}),P=i("button",{class:"btn todo-edit-cancel d-none"});s(r,"Create a new todo"),s(p,"Todo"),s(f,"Description"),s(b,"Priority"),s(x,"Priority"),s(v,"Low"),s(w,"Medium"),s(j,"High"),s(T,"Due Date"),s(E,"Submit"),s(D,"Submit"),s(C,"Cancel"),s(P,"Cancel"),[[t,e],[e,r],[e,d],[d,p],[d,u],[e,m],[m,f],[m,h],[e,g],[g,b],[g,x],[x,v],[x,w],[x,j],[e,y],[y,T],[y,k],[e,F],[F,C],[F,E],[F,P],[F,D]].forEach((n=>c(n[0],n[1]))),l(e)},showTodoForm:f,returnInfoFromTodoForm:()=>({todoTitle:n("#todoTitle").value,description:n("#todoDesc").value,dueDate:n("#dueDate").value,priority:n("#todoPriority").value}),returnInfoFromProjectForm:()=>({projectTitle:n("#projectTitle").value}),$:n}})();let e,o=[];function r(n){!function(n){n.children&&n.children[1].firstChild.addEventListener("click",(()=>{n.classList.toggle("completed")}))}(n),function(n){if(!n.children)return;let e=t.getTodoInnerText(n);n.children[1].children[1].addEventListener("click",(()=>{let t=u(e,c().todos);c().removeTodo(t),n.remove()}))}(n),p(n)}function i(n){e=n}function c(){return e}function s(n,e){e.addEventListener("click",(()=>{i(n),t.toggleSidebarAndNav();let e=t.printProjectToFocus(n);e&&(l(e),r(e))}))}function l(n){n.forEach((n=>{n.firstChild.addEventListener("click",(()=>{t.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))}function p(n){n.children&&n.children[1].lastChild.addEventListener("click",(()=>{const e=t.getTodoInnerText(n),o=u(e,c().todos);t.showEditForm(),t.populateTodoForm(e),t.$(".todo-edit-submit").onclick=()=>{let n=T(t.returnInfoFromTodoForm());c().todos.splice(o,1,n),l(t.printProjectToFocus(c())),t.hideEditForm(),t.clearTodoForm()},t.$(".todo-edit-cancel").onclick=t.hideEditForm}))}function u(n,t){let e;return t.forEach(((t,o)=>{(function(n,t){return t.todoTitle==n.todoTitle&&t.description==n.description&&t.dueDate==n.dueDate&&t.priority==n.priority})(n,t)&&(e=o)})),e}[["startApp",t.createTodoForm],["startApp",t.createProjectForm],["startApp",function(){t.$(".project-submit").addEventListener("click",(()=>{let n=function(){let n=t.returnInfoFromProjectForm(),e=d(n),r=t.printProjectToSidebar(e);return o[o.push({project:e,elem:r})-1]}();i(n.project),t.changeViewOnSubmit(n.project),s(n.project,n.elem)})),t.$(".project-cancel").addEventListener("click",(()=>{t.clearProjectForm(),t.hideProjectForm()}))}],["startApp",function(){const n=T({todoTitle:"Make another todo",description:"add a description to each todo.",dueDate:"12/25/2020",priority:"high"}),e=T({todoTitle:"Delete the first todo",description:"which would then make this the first todo...",dueDate:"3/14/2021",priority:"medium"}),o=d({projectTitle:"Make a todo list",todos:[n,e]}),r={project:o,elem:t.printProjectToSidebar(o)};i(o),t.printProjectToFocus(r.project),s(r.project,r.elem)}],["startApp",function(){t.$(".new-todo").addEventListener("click",t.showTodoForm),t.$(".complete-all").addEventListener("click",t.completeAllTodos),t.$(".delete-all").addEventListener("click",(()=>{0!=c().todos.length&&confirm("are you sure?")&&(c().todos=[],t.printProjectToFocus(c()))}))}],["startApp",function(){t.$(".todo-submit").addEventListener("click",(()=>{let n=t.returnInfoFromTodoForm(),e=T(n);c().addTodo(e),l(t.printProjectToFocus(c())),t.hideTodoForm(),t.clearTodoForm()})),t.$(".todo-cancel").addEventListener("click",(()=>{t.hideTodoForm(),t.clearTodoForm()}))}],["newProject",t.showProjectForm],["newProject",t.toggleSidebarAndNav]].forEach((t=>{n.subscribe(t[0],t[1])})),t.$(".nav").addEventListener("click",t.toggleSidebarAndNav),t.id("createProject").addEventListener("click",n.publish.bind(void 0,"newProject")),n.publish("startApp"),document.querySelectorAll(".todo").forEach((n=>{n.firstChild.addEventListener("click",(()=>{t.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))})()})()})();