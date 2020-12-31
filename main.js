(()=>{"use strict";var e={846:(e,n,t)=>{t.d(n,{Z:()=>i});var o=t(645),r=t.n(o)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]),r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap);"]),r.push([e.id,'header {\n  user-select: none;\n  background: #1d1e2f;\n  background: #23243d;\n  padding: 10px 20px;\n  font-size: 1.6em;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n}\nheader .title h1 {\n  font-family: "Righteous", cursive;\n}\nheader .nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  header {\n    font-size: 1em;\n  }\n  header .nav,\nheader .nav-selected {\n    width: 30px;\n    height: 27px;\n    display: inline-block;\n    justify-self: end;\n    display: grid;\n    place-items: center;\n  }\n  header .nav > *,\nheader .nav-selected > * {\n    transition: all 0.2s ease;\n    height: 4px;\n    width: 25px;\n    border-radius: 20px;\n    border: 1px solid white;\n    background-color: white;\n  }\n  header .nav-selected {\n    position: relative;\n  }\n  header .nav-selected #bar1 {\n    position: absolute;\n    transform: rotate(-0.125turn);\n  }\n  header .nav-selected #bar2 {\n    transform: scale(0);\n  }\n  header .nav-selected #bar3 {\n    position: absolute;\n    transform: rotate(0.125turn);\n  }\n}\n\n.sidebar {\n  position: absolute;\n  right: 0;\n  z-index: 999;\n  height: calc(100vh - 85px);\n  width: 35%;\n  max-width: 350px;\n  border-left: 2px solid #333;\n  background-color: #25252c;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: calc(100vh - 61px);\n  }\n}\n.sidebar .new-project:hover,\n.sidebar .projects > *:hover {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:hover .project-delete,\n.sidebar .projects > *:hover .project-delete {\n  display: grid;\n  place-items: center;\n  font-size: 1.5em;\n  z-index: 999999;\n}\n.sidebar .new-project:hover .project-delete:hover,\n.sidebar .projects > *:hover .project-delete:hover {\n  color: #c44;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  [data-sidebar-active=true] {\n    width: 300px;\n    background-color: #25252c;\n  }\n\n  [data-sidebar-active=false] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  [data-sidebar-active=true] {\n    min-width: 100vw;\n  }\n}\n.new-project {\n  padding: 15px;\n  font-size: 1em;\n  text-shadow: 1px 1px 3px #000;\n}\n.new-project .icon {\n  font-size: 1.2em;\n}\n\n.projects {\n  display: grid;\n  text-shadow: 1px 1px 3px #000;\n}\n.projects .project {\n  position: relative;\n  display: grid;\n  grid-template-columns: 86% 14%;\n}\n.projects .project-delete {\n  display: none;\n}\n.projects .project:active {\n  background: #dbdbdb1a;\n}\n.projects .project-title {\n  padding: 10px 10px 10px 15px;\n}\n.projects .project-title:active {\n  text-shadow: none;\n}\n\n.project-focused {\n  display: grid;\n  margin: 30px;\n  width: 72.5%;\n}\n.project-focused .title {\n  padding-bottom: 20px;\n  font-size: 2.1em;\n}\n\n.todos {\n  display: grid;\n  border-bottom: none;\n  margin-top: 20px;\n  max-width: 400px;\n}\n.todos .todo {\n  padding-left: 8px;\n  padding: 8px;\n  border: 1px solid #333;\n  border-bottom: none;\n  border-radius: 3px;\n  max-width: 400px;\n  position: relative;\n}\n.todos .todo:last-child {\n  border-bottom: 1px solid #333;\n}\n.todos .prop-header {\n  font-size: 0.87em;\n}\n.todos .prop-header .todoTitle {\n  max-width: 300px;\n  font-size: 1.2em;\n  user-select: none;\n}\n@media (max-width: 540px) {\n  .todos .prop-header .todoTitle {\n    max-width: 250px;\n  }\n}\n@media (max-width: 440px) {\n  .todos .prop-header .todoTitle {\n    max-width: 190px;\n  }\n}\n.todos .description,\n.todos .dueDate,\n.todos .priority {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.controls {\n  position: absolute;\n  top: 0;\n  right: -10px;\n  height: 40px;\n  width: 60px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  gap: 5px;\n  font-weight: bolder;\n  user-select: none;\n  text-shadow: 1px 2px 1px black;\n}\n.controls .todo-complete {\n  font-size: 23px;\n  color: #1a1;\n  transform: scale(1.2);\n}\n.controls .todo-complete:hover {\n  color: #171;\n}\n.controls .todo-remove {\n  font-size: 21px;\n  color: #9d9d9d;\n}\n.controls .todo-remove:hover {\n  color: #716b6b;\n}\n.controls .todo-remove:active {\n  color: #c44;\n}\n.controls .todo-edit {\n  margin-left: 13px;\n  transform: rotate(90deg);\n}\n.controls .todo-edit:hover {\n  opacity: 60%;\n}\n\n[data-todo-active=true] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: opacity 0.4s ease, max-height 0.2s ease;\n  max-height: 250px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n[data-todo-active=true] > * {\n  padding: 8px;\n  padding-left: 5px;\n}\n\n[data-todo-active=false] {\n  max-height: 0;\n  width: 0;\n  overflow: hidden;\n  opacity: 0%;\n}\n\n.bottom-controls {\n  position: fixed;\n  background: #1d1e2f;\n  background: #23243d;\n  bottom: 0;\n  width: 100%;\n  overflow-x: hidden;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 80px 140px 110px;\n  align-items: center;\n  gap: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px #000;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bottom-controls > * {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.bottom-controls > *:hover {\n  background: #dbdbdb1a;\n}\n.bottom-controls > *:active {\n  background: #dbdbdb1a;\n}\n@media (min-width: 390px) and (max-width: 540px) {\n  .bottom-controls {\n    overflow-x: hidden;\n    justify-content: space-around;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .bottom-controls {\n    height: 50px;\n  }\n  .bottom-controls > * {\n    font-size: 20px;\n  }\n}\n@media (min-width: 768.01px) {\n  .bottom-controls {\n    grid-template-columns: 115px 180px 135px;\n    position: fixed;\n    height: 70px;\n  }\n}\n\n.todo-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.todo-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .todo-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .todo-form {\n    left: 5%;\n  }\n}\n@media (min-width: 769px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 805px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .todo-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .todo-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1215px) {\n  .todo-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .todo-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n.project-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.project-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .project-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .project-form {\n    left: 5%;\n  }\n}\n@media (min-width: 805px) {\n  .project-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .project-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .project-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1220px) {\n  .project-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .project-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "M PLUS Rounded 1c", Courier, sans-serif;\n}\n\nbody {\n  color: #eee;\n  background: #1c1c22;\n  position: relative;\n}\n\n.btn {\n  border: none;\n  background: #555;\n  height: 40px;\n  color: #eee;\n  border-radius: 8px;\n  font-size: 17px;\n  display: grid;\n  place-items: center;\n}\n\n[class$=-submit] {\n  background: #1a1;\n}\n[class$=-submit]:hover {\n  background: #2b2;\n}\n[class$=-submit]:active {\n  background: #3b3;\n}\n\n[class$=-cancel] {\n  background: #a22;\n}\n[class$=-cancel]:hover {\n  background: #b33;\n}\n[class$=-cancel]:active {\n  background: #b44;\n}\n\n.btn-container {\n  margin-top: 15px;\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n}\n\n[class$=-label] {\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\ninput,\nselect {\n  min-width: 260px;\n  background: #484848;\n  color: white;\n  font-size: 16px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n  padding-left: 4px;\n}\n\ninput {\n  padding-left: 4px;\n}\n\nselect {\n  appearance: none;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #444;\n}\n\n.d-none {\n  display: none;\n}\n',""]);const i=r},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,o){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(r[d]=!0)}for(var a=0;a<e.length;a++){var c=[].concat(e[a]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),n.push(c))}},n}},379:(e,n,t)=>{var o,r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function d(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function a(e,n){for(var t={},o=[],r=0;r<e.length;r++){var a=e[r],c=n.base?a[0]+n.base:a[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var p=d(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:f(u,n),references:1}),o.push(l)}return o}function c(e){var n=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){n.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(n);else{var d=r(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(n)}return n}var s,l=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function p(e,n,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=l(n,r);else{var i=document.createTextNode(r),d=e.childNodes;d[n]&&e.removeChild(d[n]),d.length?e.insertBefore(i,d[n]):e.appendChild(i)}}function u(e,n,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var m=null,h=0;function f(e,n){var t,o,r;if(n.singleton){var i=h++;t=m||(m=c(n)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=c(n),o=u.bind(null,t,n),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else r()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=a(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<t.length;o++){var r=d(t[o]);i[r].references--}for(var c=a(e,n),s=0;s<t.length;s++){var l=d(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e=t(379),n=t.n(e),o=t(846);function r(e,n){if(n.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+n.length+" present")}function i(e){r(1,arguments);var n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new Date(e.getTime()):"number"==typeof e||"[object Number]"===n?new Date(e):("string"!=typeof e&&"[object String]"!==n||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function d(){return function(e){r(1,arguments);var n=i(e);return n.setHours(0,0,0,0),n}(Date.now())}n()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const a=e=>({projectTitle:e.projectTitle||"Unnamed Project",todos:e.todos||[],addTodo(e){this.todos.push(e)},removeTodo(e){this.todos.splice(e,1)}});function c(e,n){for(var t=e<0?"-":"",o=Math.abs(e).toString();o.length<n;)o="0"+o;return t+o}const s={y:function(e,n){var t=e.getUTCFullYear(),o=t>0?t:1-t;return c("yy"===n?o%100:o,n.length)},M:function(e,n){var t=e.getUTCMonth();return"M"===n?String(t+1):c(t+1,2)},d:function(e,n){return c(e.getUTCDate(),n.length)},a:function(e,n){var t=e.getUTCHours()/12>=1?"pm":"am";switch(n){case"a":case"aa":case"aaa":return t.toUpperCase();case"aaaaa":return t[0];case"aaaa":default:return"am"===t?"a.m.":"p.m."}},h:function(e,n){return c(e.getUTCHours()%12||12,n.length)},H:function(e,n){return c(e.getUTCHours(),n.length)},m:function(e,n){return c(e.getUTCMinutes(),n.length)},s:function(e,n){return c(e.getUTCSeconds(),n.length)},S:function(e,n){var t=n.length,o=e.getUTCMilliseconds();return c(Math.floor(o*Math.pow(10,t-3)),n.length)}};var l=6e4;function p(e){return e.getTime()%l}function u(e){var n=new Date(e.getTime()),t=Math.ceil(n.getTimezoneOffset());n.setSeconds(0,0);var o=t>0?(l+p(n))%l:p(n);return t*l+o}function m(e){r(1,arguments);var n=i(e);return!isNaN(n)}function h(e){if(null===e||!0===e||!1===e)return NaN;var n=Number(e);return isNaN(n)?n:n<0?Math.ceil(n):Math.floor(n)}function f(e,n){r(2,arguments);var t=i(e).getTime(),o=h(n);return new Date(t+o)}function g(e,n){r(2,arguments);var t=h(n);return f(e,-t)}var b=/(\w)\1*|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,v=/''/g,w=/[a-zA-Z]/;function j(e,n){r(2,arguments);var t=String(n),o=i(e);if(!m(o))throw new RangeError("Invalid time value");var d=u(o),a=g(o,d),c=t.match(b).map((function(e){if("''"===e)return"'";var n=e[0];if("'"===n)return y(e);var t=s[n];if(t)return t(a,e,null,{});if(n.match(w))throw new RangeError("Format string contains an unescaped latin alphabet character `"+n+"`");return e})).join("");return c}function y(e){return e.match(x)[1].replace(v,"'")}const T=(e=null)=>({todoTitle:e.todoTitle||"Unnamed Todo",description:e.description||"It's self-explanatory!",dueDate:e.dueDate||j(d(),"M/dd/y"),priority:e.priority||"None."});(()=>{const e=(()=>{let e={};return{publish:(n,t)=>{if(!e[n])return;let o;return e[n].forEach((e=>{o=e(t)})),o},subscribe:(n,t)=>{let o;return e[n]||(e[n]=[]),o=e[n].push(t)-1,{unsubscribe(){e[n].splice(o,1)}}}}})(),n=(()=>{const e=e=>document.querySelector(e),n=e=>document.getElementById(e),t=e=>document.querySelectorAll(e),o=e=>document.createElement(e),r=(e,n)=>{"true"==e.getAttribute(n)?e.setAttribute(n,!1):e.setAttribute(n,!0)},i=(e,n)=>((e,n)=>{for(let t in n)e.setAttribute(t,n[t]);return e})(o(e),n),a=(e,n)=>e.classList.add(n),c=(e,n)=>e.appendChild(n),s=(e,n)=>e.innerText=n,l=e=>e.style.display="none",p=e=>e.style.display="",u=e=>{e.value=""},m=()=>u(e("#projectTitle")),h=()=>p(e(".todo-form")),f=()=>{const n=e(".todos");for(;n.firstChild;)n.firstChild.remove()},g=()=>{e(".focused-title").innerText="",f()},b=n=>{if(f(),0==n.length)return;let o=function(n){const t=[],o=e(".todos");return n.forEach(((e,n)=>{const r=i("div",{class:`todo todo-${n}`});c(o,r);for(let t in e){let o=i("h4",{class:`${t}`}),d=i("h4",{class:`prop-header ${t} ${t}-${n}`});s(o,e[t]),s(d,x(t)),c(r,d),c(d,o)}t.push(r)})),t}(n);return t(".todo").forEach((e=>{const n=i("div",{class:"controls"}),t=i("div",{class:"todo-complete"}),o=i("div",{class:"todo-remove"}),r=i("div",{class:"todo-edit"});s(r,"✏️"),s(t,"✓"),s(o,"🗑"),c(n,t),c(n,o),c(n,r),c(e,n)})),o.forEach(((n,t)=>function(n,t){const o=i("div",{class:"todo-info",id:`todo-${n}`,"data-todo-active":!1});[e(`.description-${n}`),e(`.dueDate-${n}`),e(`.priority-${n}`)].forEach((e=>c(o,e))),c(t,o)}(t,n))),o};function x(e){return{todoTitle:"",description:"Description",dueDate:"Due",priority:"Priority"}[e]}const v=n=>{const t=e(".focused-title");return s(t,n.projectTitle),b(n.todos)};function w(){l(e(".todo-form"))}return{hideEditForm:function(){e(".todo-submit").classList.toggle("d-none"),e(".todo-edit-submit").classList.toggle("d-none"),e(".todo-cancel").classList.toggle("d-none"),e(".todo-edit-cancel").classList.toggle("d-none"),w()},showEditForm:function(){e(".todo-submit").classList.toggle("d-none"),e(".todo-edit-submit").classList.toggle("d-none"),e(".todo-cancel").classList.toggle("d-none"),e(".todo-edit-cancel").classList.toggle("d-none"),h()},populateTodoForm:function(e){n("todoTitle").value=e.todoTitle,n("todoDesc").value=e.description,n("todoPriority").value=e.priority,n("dueDate").value=new Date(Date.parse(e.dueDate)).toISOString().substr(0,10)},getTodoInnerText:function(e){return{todoTitle:e.firstChild.firstChild.innerText,description:e.lastChild.children[0].lastChild.innerText,dueDate:e.lastChild.children[1].lastChild.innerText,priority:e.lastChild.children[2].lastChild.innerText}},toggleAttr:r,completeAllTodos:function(){t(".todo").forEach((e=>a(e,"completed")))},clearTodoForm:()=>{t(".todo-input").forEach((e=>u(e))),n("dueDate").value="",n("todoPriority").value=e("[selected='selected']").value},hideProjectForm:function(){l(e(".project-form"))},hideTodoForm:w,changeViewOnSubmit:function(n){g(),m(),l(e(".project-form")),v(n)},toggleSidebarAndNav:function(){!function(){let n=e(".nav");2===n.classList.length?n.classList.remove("nav-selected"):a(n,"nav-selected")}(),function(){let n=e(".sidebar");r(n,"data-sidebar-active")}()},clearProjectForm:m,id:n,clearFocus:g,printProjectToFocus:v,printProjectToSidebar:n=>{const t=e(".projects"),o=i("div",{class:"project"}),r=i("h3",{class:"project-title",id:`${n.projectTitle}`});return s(r,n.projectTitle),c(t,o),c(o,r),function(e){const n=i("div",{class:"project-delete"}),t=i("div",{class:"delete-icon"});s(t,"🗑"),c(e,n),c(n,t)}(o),o},printTodos:b,createProjectForm:()=>{const n=e("body"),t=i("div",{class:"project-form"}),r=o("h2"),d=i("div",{class:"form-wrapper"}),a=i("label",{for:"projectTitle",class:"project-label"}),p=i("input",{type:"text",class:"project-title",id:"projectTitle",name:"Project: "}),u=i("div",{class:"btn-container"}),m=i("button",{class:"btn project-submit"}),h=i("button",{class:"btn project-cancel"});s(r,"Create a new project"),s(a,"Project Title"),s(m,"Submit"),s(h,"Cancel"),[[n,t],[t,r],[t,d],[d,a],[d,p],[t,u],[u,h],[u,m]].forEach((e=>c(e[0],e[1]))),l(t)},showProjectForm:()=>p(e(".project-form")),createTodoForm:()=>{const n=e("body"),t=i("div",{class:"todo-form"}),r=o("h2"),a=i("div",{class:"title-info"}),p=i("label",{for:"todoTitle",class:"todo-label"}),u=i("input",{type:"text",id:"todoTitle",class:"todo-input",placeholder:"I need to make a sandwich..."}),m=i("div",{class:"desc-info"}),h=i("label",{for:"todoDesc",class:"todo-label"}),f=i("input",{type:"text",id:"todoDesc",class:"todo-input",placeholder:"It will be a peanut butter & jelly sandwich."}),g=i("div",{class:"priority-container"}),b=i("label",{for:"todoPriority",class:"todo-label"}),x=i("select",{name:"priority",id:"todoPriority"}),v=i("option",{value:"low",selected:"selected"}),w=i("option",{value:"medium"}),j=i("option",{value:"high"}),y=i("div",{class:"duedate-container"}),T=i("label",{for:"dueDate",class:"todo-label"}),k=i("input",{id:"dueDate",class:"todo-date",type:"date",value:d(),min:d()}),F=i("div",{class:"btn-container"}),C=i("button",{class:"btn todo-submit"}),E=i("button",{class:"btn todo-cancel"}),D=i("button",{class:"btn todo-edit-submit d-none"}),P=i("button",{class:"btn todo-edit-cancel d-none"});s(r,"Create a new todo"),s(p,"Todo"),s(h,"Description"),s(b,"Priority"),s(x,"Priority"),s(v,"Low"),s(w,"Medium"),s(j,"High"),s(T,"Due Date"),s(C,"Submit"),s(D,"Submit"),s(E,"Cancel"),s(P,"Cancel"),[[n,t],[t,r],[t,a],[a,p],[a,u],[t,m],[m,h],[m,f],[t,g],[g,b],[g,x],[x,v],[x,w],[x,j],[t,y],[y,T],[y,k],[t,F],[F,E],[F,C],[F,P],[F,D]].forEach((e=>c(e[0],e[1]))),l(t)},showTodoForm:h,returnInfoFromTodoForm:()=>({todoTitle:e("#todoTitle").value,description:e("#todoDesc").value,dueDate:e("#dueDate").value,priority:e("#todoPriority").value}),returnInfoFromProjectForm:()=>({projectTitle:e("#projectTitle").value}),$:e}})();let t,o=[];function r(e){!function(e){e.children&&e.children[1].firstChild.addEventListener("click",(()=>{e.classList.toggle("completed")}))}(e),function(e){if(!e.children)return;let t=n.getTodoInnerText(e);e.children[1].children[1].addEventListener("click",(()=>{let n=u(t,c().todos);c().removeTodo(n),e.remove()}))}(e),p(e)}function i(e){t=e}function c(){return t}function s(e,t){t.firstChild.addEventListener("click",(()=>{i(e),n.toggleSidebarAndNav();let t=n.printProjectToFocus(e);t&&(l(t),r(t))}))}function l(e){e.forEach((e=>{e.firstChild.addEventListener("click",(()=>{n.toggleAttr(e.lastChild,"data-todo-active")})),r(e)}))}function p(e){e.children&&e.children[1].lastChild.addEventListener("click",(()=>{const t=n.getTodoInnerText(e),o=u(t,c().todos);n.showEditForm(),n.populateTodoForm(t),n.$(".todo-edit-submit").onclick=()=>{let e=T(n.returnInfoFromTodoForm());c().todos.splice(o,1,e),l(n.printProjectToFocus(c())),n.hideEditForm(),n.clearTodoForm()},n.$(".todo-edit-cancel").onclick=n.hideEditForm}))}function u(e,n){let t;return n.forEach(((n,o)=>{(function(e,n){return n.todoTitle==e.todoTitle&&n.description==e.description&&n.dueDate==e.dueDate&&n.priority==e.priority})(e,n)&&(t=o)})),t}[["startApp",n.createTodoForm],["startApp",n.createProjectForm],["startApp",function(){n.$(".project-submit").addEventListener("click",(()=>{let e=function(){let e=n.returnInfoFromProjectForm(),t=a(e),r=n.printProjectToSidebar(t);return o[o.push({project:t,elem:r})-1]}();i(e.project),n.changeViewOnSubmit(e.project),s(e.project,e.elem),function(e,t){const r=t.lastChild;let d=o.findIndex((n=>n.project==e));r.addEventListener("click",(()=>{o.splice(d,1),t.remove(),c()==e&&(n.clearFocus(),i(null))}))}(e.project,e.elem)})),n.$(".project-cancel").addEventListener("click",(()=>{n.clearProjectForm(),n.hideProjectForm()}))}],["startApp",function(){const e=T({todoTitle:"Make another todo",description:"add a description to each todo.",dueDate:"12/25/2020",priority:"high"}),t=T({todoTitle:"Delete the first todo",description:"which would then make this the first todo...",dueDate:"3/14/2021",priority:"medium"}),o=a({projectTitle:"Make a todo list",todos:[e,t]}),r={project:o,elem:n.printProjectToSidebar(o)};i(o),n.printProjectToFocus(r.project),s(r.project,r.elem)}],["startApp",function(){n.$(".new-todo").addEventListener("click",n.showTodoForm),n.$(".complete-all").addEventListener("click",n.completeAllTodos),n.$(".delete-all").addEventListener("click",(()=>{0!=c().todos.length&&confirm("are you sure?")&&(c().todos=[],n.printProjectToFocus(c()))}))}],["startApp",function(){n.$(".todo-submit").addEventListener("click",(()=>{let e=n.returnInfoFromTodoForm(),t=T(e);c().addTodo(t),l(n.printProjectToFocus(c())),n.hideTodoForm(),n.clearTodoForm()})),n.$(".todo-cancel").addEventListener("click",(()=>{n.hideTodoForm(),n.clearTodoForm()}))}],["newProject",n.showProjectForm],["newProject",n.toggleSidebarAndNav]].forEach((n=>{e.subscribe(n[0],n[1])})),n.$(".nav").addEventListener("click",n.toggleSidebarAndNav),n.id("createProject").addEventListener("click",e.publish.bind(void 0,"newProject")),e.publish("startApp"),document.querySelectorAll(".todo").forEach((e=>{e.firstChild.addEventListener("click",(()=>{n.toggleAttr(e.lastChild,"data-todo-active")})),r(e)}))})()})()})();