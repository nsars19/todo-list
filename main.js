(()=>{"use strict";var n={846:(n,e,t)=>{t.d(e,{Z:()=>i});var o=t(645),r=t.n(o)()((function(n){return n[1]}));r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Righteous&display=swap);"]),r.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@400;700;800;900&display=swap);"]),r.push([n.id,'header {\n  user-select: none;\n  background: #1d1e2f;\n  background: #23243d;\n  padding: 10px 20px;\n  font-size: 1.6em;\n  display: grid;\n  align-items: center;\n  grid-auto-flow: column;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 9999;\n}\nheader .title h1 {\n  font-family: "Righteous", cursive;\n}\nheader .nav {\n  display: none;\n}\n@media (max-width: 768px) {\n  header {\n    font-size: 1em;\n  }\n  header .nav,\nheader .nav-selected {\n    width: 30px;\n    height: 27px;\n    display: inline-block;\n    justify-self: end;\n    display: grid;\n    place-items: center;\n  }\n  header .nav > *,\nheader .nav-selected > * {\n    transition: all 0.2s ease;\n    height: 4px;\n    width: 25px;\n    border-radius: 20px;\n    border: 1px solid white;\n    background-color: white;\n  }\n  header .nav-selected {\n    position: relative;\n  }\n  header .nav-selected #bar1 {\n    position: absolute;\n    transform: rotate(-0.125turn);\n  }\n  header .nav-selected #bar2 {\n    transform: scale(0);\n  }\n  header .nav-selected #bar3 {\n    position: absolute;\n    transform: rotate(0.125turn);\n  }\n}\n\n.sidebar {\n  position: fixed;\n  right: 0;\n  top: 85px;\n  z-index: 999;\n  height: calc(100vh);\n  width: 35%;\n  max-width: 350px;\n  border-left: 2px solid #333;\n  background-color: #25252c;\n  overflow-y: scroll;\n  overflow-x: hidden;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n}\n@media (max-width: 768px) {\n  .sidebar {\n    height: calc(100vh);\n    top: 60px;\n  }\n}\n.sidebar .new-project:hover,\n.sidebar .projects > *:hover {\n  background: #dbdbdb1a;\n}\n.sidebar .new-project:hover .project-delete,\n.sidebar .projects > *:hover .project-delete {\n  display: grid;\n  place-items: center;\n  font-size: 1.5em;\n  z-index: 999999;\n}\n.sidebar .new-project:hover .project-delete:hover,\n.sidebar .projects > *:hover .project-delete:hover {\n  color: #c44;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  [data-sidebar-active=true] {\n    width: 300px;\n    background-color: #25252c;\n  }\n\n  [data-sidebar-active=false] {\n    display: none;\n  }\n}\n@media (max-width: 400px) {\n  [data-sidebar-active=true] {\n    min-width: 100vw;\n  }\n}\n.new-project {\n  padding: 15px;\n  font-size: 1em;\n  text-shadow: 1px 1px 3px #000;\n}\n.new-project .icon {\n  font-size: 1.2em;\n}\n\n.projects {\n  display: grid;\n  text-shadow: 1px 1px 3px #000;\n}\n.projects .project {\n  position: relative;\n  display: grid;\n  grid-template-columns: 86% 14%;\n}\n.projects .project-delete {\n  display: none;\n}\n.projects .project:active {\n  background: #dbdbdb1a;\n}\n.projects .project-title {\n  padding: 10px 10px 10px 15px;\n}\n.projects .project-title:active {\n  text-shadow: none;\n}\n\n.project-focused {\n  display: grid;\n  padding-top: 20px;\n  margin: 81px 30px 60px;\n  width: 72.5%;\n}\n.project-focused .title {\n  padding-bottom: 20px;\n  font-size: 2.1em;\n}\n\n.todos {\n  display: grid;\n  border-bottom: none;\n  margin-top: 20px;\n  max-width: 400px;\n}\n.todos .todo {\n  padding-left: 8px;\n  padding: 8px;\n  border: 1px solid #333;\n  border-bottom: none;\n  border-radius: 3px;\n  max-width: 400px;\n  position: relative;\n}\n.todos .todo:last-child {\n  border-bottom: 1px solid #333;\n}\n.todos .prop-header {\n  font-size: 0.87em;\n}\n.todos .prop-header .todoTitle {\n  max-width: 300px;\n  font-size: 1.2em;\n  user-select: none;\n  word-wrap: break-word;\n}\n@media (max-width: 540px) {\n  .todos .prop-header .todoTitle {\n    max-width: 250px;\n  }\n}\n@media (max-width: 440px) {\n  .todos .prop-header .todoTitle {\n    max-width: 190px;\n  }\n}\n.todos .description,\n.todos .dueDate,\n.todos .priority {\n  margin-top: 3px;\n  margin-left: 5px;\n}\n\n.controls {\n  position: absolute;\n  top: 0;\n  right: -5px;\n  height: 40px;\n  width: 60px;\n  display: grid;\n  grid-auto-flow: column;\n  align-items: center;\n  gap: 5px;\n  font-weight: bolder;\n  user-select: none;\n  text-shadow: 1px 2px 1px black;\n}\n.controls .todo-complete {\n  font-size: 23px;\n  color: #1a1;\n  transform: scale(1.2);\n}\n.controls .todo-complete:hover {\n  color: #171;\n}\n.controls .todo-remove {\n  font-size: 21px;\n  color: #9d9d9d;\n}\n.controls .todo-remove:hover {\n  color: #716b6b;\n}\n.controls .todo-remove:active {\n  color: #c44;\n}\n.controls .todo-edit {\n  margin-left: 13px;\n  transform: rotate(90deg);\n}\n.controls .todo-edit:hover {\n  opacity: 60%;\n}\n\n[data-todo-active=true] {\n  margin-top: 5px;\n  margin-bottom: 5px;\n  transition: opacity 0.4s ease, max-height 0.2s ease;\n  max-height: 250px;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n[data-todo-active=true] > * {\n  padding: 8px;\n  padding-left: 5px;\n}\n\n[data-todo-active=false] {\n  max-height: 0;\n  width: 0;\n  overflow: hidden;\n  opacity: 0%;\n}\n\n.bottom-controls {\n  position: fixed;\n  background: #1d1e2f;\n  background: #23243d;\n  bottom: 0;\n  width: 100%;\n  overflow-x: hidden;\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 80px 140px 110px;\n  align-items: center;\n  gap: 10px;\n  font-size: 25px;\n  font-weight: bold;\n  text-shadow: 1px 1px 1px #000;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\n.bottom-controls > * {\n  height: 100%;\n  display: grid;\n  place-items: center;\n}\n.bottom-controls > *:hover {\n  background: #dbdbdb1a;\n}\n.bottom-controls > *:active {\n  background: #dbdbdb1a;\n}\n@media (min-width: 390px) and (max-width: 540px) {\n  .bottom-controls {\n    overflow-x: hidden;\n    justify-content: space-around;\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 768px) {\n  .bottom-controls {\n    height: 50px;\n  }\n  .bottom-controls > * {\n    font-size: 20px;\n  }\n}\n@media (min-width: 768.01px) {\n  .bottom-controls {\n    grid-template-columns: 115px 180px 135px;\n    position: fixed;\n    height: 70px;\n  }\n}\n\n.todo-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.todo-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .todo-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .todo-form {\n    left: 5%;\n  }\n}\n@media (min-width: 769px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 805px) {\n  .todo-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .todo-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .todo-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1215px) {\n  .todo-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .todo-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n.project-form {\n  position: fixed;\n  top: 120px;\n  padding: 22px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 3px #111;\n  background-color: #333333;\n  display: grid;\n  gap: 14px;\n  width: 500px;\n  z-index: 1000;\n}\n.project-form > * {\n  display: grid;\n  gap: 5px;\n}\n@media (min-width: 541px) and (max-width: 768px) {\n  .project-form {\n    left: 8%;\n  }\n}\n@media (max-width: 565px) {\n  .project-form {\n    left: 5%;\n  }\n}\n@media (min-width: 805px) {\n  .project-form {\n    left: 2%;\n  }\n}\n@media (min-width: 915px) {\n  .project-form {\n    left: 10%;\n  }\n}\n@media (min-width: 1065px) {\n  .project-form {\n    left: 20%;\n  }\n}\n@media (min-width: 1220px) {\n  .project-form {\n    left: 30%;\n  }\n}\n@media (max-width: 540px) {\n  .project-form {\n    left: 10px;\n    width: calc(100% - 20px);\n  }\n}\n\n.warning-wrapper {\n  display: grid;\n  place-items: center;\n  padding: 0 15px;\n}\n\n.warning {\n  padding: 13px;\n  border-radius: 5px;\n  background: #333;\n  display: grid;\n  align-content: space-between;\n  justify-items: center;\n  z-index: 999;\n}\n.warning-text {\n  margin: 0px auto 0px;\n  text-align: center;\n}\ndiv .warning-btn {\n  margin-top: 25px;\n  width: 250px;\n  background: #1a1;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\ndiv .warning-btn:hover {\n  background: #2b2;\n}\ndiv .warning-btn:active {\n  background: #3b3;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: "M PLUS Rounded 1c", Courier, sans-serif;\n}\n\nbody {\n  color: #eee;\n  background: #1c1c22;\n  position: relative;\n}\n\n.btn {\n  border: none;\n  background: #555;\n  height: 40px;\n  color: #eee;\n  border-radius: 8px;\n  font-size: 17px;\n  display: grid;\n  place-items: center;\n}\n\n[class$=-submit] {\n  background: #1a1;\n}\n[class$=-submit]:hover {\n  background: #2b2;\n}\n[class$=-submit]:active {\n  background: #3b3;\n}\n\n[class$=-cancel] {\n  background: #a22;\n}\n[class$=-cancel]:hover {\n  background: #b33;\n}\n[class$=-cancel]:active {\n  background: #b44;\n}\n\n.btn-container {\n  margin-top: 15px;\n  display: grid;\n  gap: 10px;\n  grid-auto-flow: column;\n}\n\n[class$=-label] {\n  letter-spacing: 1px;\n  font-weight: bold;\n  font-size: 15px;\n}\n\ninput,\nselect {\n  min-width: 260px;\n  background: #484848;\n  color: white;\n  font-size: 16px;\n  height: 30px;\n  border: none;\n  border-radius: 4px;\n  padding-left: 4px;\n}\n\ninput {\n  padding-left: 4px;\n}\n\nselect {\n  appearance: none;\n}\n\n.completed {\n  text-decoration: line-through;\n  color: #444;\n}\n\n.d-none {\n  display: none;\n}\n',""]);const i=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var d=0;d<n.length;d++){var c=[].concat(n[d]);o&&r[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),e.push(c))}},e}},379:(n,e,t)=>{var o,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},o=[],r=0;r<n.length;r++){var d=n[r],c=e.base?d[0]+e.base:d[0],s=t[c]||0,l="".concat(c," ").concat(s);t[c]=s+1;var p=a(l),u={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(u)):i.push({identifier:l,updater:f(u,e),references:1}),o.push(l)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=t.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var s,l=(s=[],function(n,e){return s[n]=e,s.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function u(n,e,t){var o=t.css,r=t.media,i=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var m=null,h=0;function f(n,e){var t,o,r;if(e.singleton){var i=h++;t=m||(m=c(e)),o=p.bind(null,t,i,!1),r=p.bind(null,t,i,!0)}else t=c(e),o=u.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=a(t[o]);i[r].references--}for(var c=d(n,e),s=0;s<t.length;s++){var l=a(t[s]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=c}}}}},e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n=t(379),e=t.n(n),o=t(846);function r(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function i(n){r(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"==typeof n&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function a(){return function(n){r(1,arguments);var e=i(n);return e.setHours(0,0,0,0),e}(Date.now())}e()(o.Z,{insert:"head",singleton:!1}),o.Z.locals;const d=n=>({projectTitle:n.projectTitle||"Unnamed Project",todos:n.todos||[],addTodo(n){this.todos.push(n)},removeTodo(n){this.todos.splice(n,1)}});function c(n,e){for(var t=n<0?"-":"",o=Math.abs(n).toString();o.length<e;)o="0"+o;return t+o}const s={y:function(n,e){var t=n.getUTCFullYear(),o=t>0?t:1-t;return c("yy"===e?o%100:o,e.length)},M:function(n,e){var t=n.getUTCMonth();return"M"===e?String(t+1):c(t+1,2)},d:function(n,e){return c(n.getUTCDate(),e.length)},a:function(n,e){var t=n.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":case"aaa":return t.toUpperCase();case"aaaaa":return t[0];case"aaaa":default:return"am"===t?"a.m.":"p.m."}},h:function(n,e){return c(n.getUTCHours()%12||12,e.length)},H:function(n,e){return c(n.getUTCHours(),e.length)},m:function(n,e){return c(n.getUTCMinutes(),e.length)},s:function(n,e){return c(n.getUTCSeconds(),e.length)},S:function(n,e){var t=e.length,o=n.getUTCMilliseconds();return c(Math.floor(o*Math.pow(10,t-3)),e.length)}};var l=6e4;function p(n){return n.getTime()%l}function u(n){var e=new Date(n.getTime()),t=Math.ceil(e.getTimezoneOffset());e.setSeconds(0,0);var o=t>0?(l+p(e))%l:p(e);return t*l+o}function m(n){r(1,arguments);var e=i(n);return!isNaN(e)}function h(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function f(n,e){r(2,arguments);var t=i(n).getTime(),o=h(e);return new Date(t+o)}function g(n,e){r(2,arguments);var t=h(e);return f(n,-t)}var b=/(\w)\1*|''|'(''|[^'])+('|$)|./g,x=/^'([^]*?)'?$/,v=/''/g,w=/[a-zA-Z]/;function j(n,e){r(2,arguments);var t=String(e),o=i(n);if(!m(o))throw new RangeError("Invalid time value");var a=u(o),d=g(o,a),c=t.match(b).map((function(n){if("''"===n)return"'";var e=n[0];if("'"===e)return y(n);var t=s[e];if(t)return t(d,n,null,{});if(e.match(w))throw new RangeError("Format string contains an unescaped latin alphabet character `"+e+"`");return n})).join("");return c}function y(n){return n.match(x)[1].replace(v,"'")}const T=(n=null)=>({todoTitle:n.todoTitle||"Unnamed Todo",description:n.description||"It's self-explanatory!",dueDate:n.dueDate||j(a(),"M/dd/y"),priority:n.priority||"None."});(()=>{const n=(()=>{let n={};return{publish:(e,t)=>{if(!n[e])return;let o;return n[e].forEach((n=>{o=n(t)})),o},subscribe:(e,t)=>{let o;return n[e]||(n[e]=[]),o=n[e].push(t)-1,{unsubscribe(){n[e].splice(o,1)}}}}})(),e=(()=>{const n=n=>document.querySelector(n),e=n=>document.getElementById(n),t=n=>document.querySelectorAll(n),o=n=>document.createElement(n),r=(n,e)=>{"true"==n.getAttribute(e)?n.setAttribute(e,!1):n.setAttribute(e,!0)},i=(n,e)=>((n,e)=>{for(let t in e)n.setAttribute(t,e[t]);return n})(o(n),e),d=(n,e)=>n.classList.add(e),c=(n,e)=>n.appendChild(e),s=(n,e)=>n.innerText=e,l=n=>n.style.display="none",p=n=>n.style.display="",u=n=>{n.value=""},m=()=>u(n("#projectTitle")),h=()=>p(n(".todo-form")),f=()=>{const e=n(".todos");for(;e.firstChild;)e.firstChild.remove()},g=()=>{n(".focused-title").innerText="",f()},b=e=>{if(f(),0==e.length)return;let o=function(e){const t=[],o=n(".todos");return e.forEach(((n,e)=>{const r=i("div",{class:`todo todo-${e}`});c(o,r);for(let t in n){let o=i("h4",{class:`${t}`}),a=i("h4",{class:`prop-header ${t} ${t}-${e}`});s(o,n[t]),s(a,x(t)),c(r,a),c(a,o)}t.push(r)})),t}(e);return t(".todo").forEach((n=>{const e=i("div",{class:"controls"}),t=i("div",{class:"todo-complete"}),o=i("div",{class:"todo-remove"}),r=i("div",{class:"todo-edit"});s(r,"✏️"),s(t,"✓"),s(o,"🗑"),c(e,t),c(e,o),c(e,r),c(n,e)})),o.forEach(((e,t)=>function(e,t){const o=i("div",{class:"todo-info",id:`todo-${e}`,"data-todo-active":!1});[n(`.description-${e}`),n(`.dueDate-${e}`),n(`.priority-${e}`)].forEach((n=>c(o,n))),c(t,o)}(t,e))),o};function x(n){return{todoTitle:"",description:"Description",dueDate:"Due",priority:"Priority"}[n]}const v=e=>{const t=n(".focused-title");return s(t,e.projectTitle),b(e.todos)};function w(){l(n(".todo-form"))}return{hideWarning:function(){n(".warning").remove()},showWarning:function(){const e=n("body"),t=i("div",{class:"warning-wrapper"}),o=i("div",{class:"warning"}),r=i("h3",{class:"warning-text"}),a=i("div",{class:"warning-btn btn"});s(r,"There's no project to add this todo to!"),s(a,"Ok, I won't do it again."),[[e,t],[t,o],[o,r],[o,a]].forEach((n=>c(n[0],n[1])))},hideEditForm:function(){n(".todo-submit").classList.toggle("d-none"),n(".todo-edit-submit").classList.toggle("d-none"),n(".todo-cancel").classList.toggle("d-none"),n(".todo-edit-cancel").classList.toggle("d-none"),w()},showEditForm:function(){n(".todo-submit").classList.toggle("d-none"),n(".todo-edit-submit").classList.toggle("d-none"),n(".todo-cancel").classList.toggle("d-none"),n(".todo-edit-cancel").classList.toggle("d-none"),h()},populateTodoForm:function(n){e("todoTitle").value=n.todoTitle,e("todoDesc").value=n.description,e("todoPriority").value=n.priority,e("dueDate").value=new Date(Date.parse(n.dueDate)).toISOString().substr(0,10)},getTodoInnerText:function(n){return{todoTitle:n.firstChild.firstChild.innerText,description:n.lastChild.children[0].lastChild.innerText,dueDate:n.lastChild.children[1].lastChild.innerText,priority:n.lastChild.children[2].lastChild.innerText}},toggleAttr:r,completeAllTodos:function(){t(".todo").forEach((n=>d(n,"completed")))},clearTodoForm:()=>{t(".todo-input").forEach((n=>u(n))),e("dueDate").value="",e("todoPriority").value=n("[selected='selected']").value},hideProjectForm:function(){l(n(".project-form"))},hideTodoForm:w,changeViewOnSubmit:function(e){g(),m(),l(n(".project-form")),v(e)},toggleSidebarAndNav:function(){!function(){let e=n(".nav");2===e.classList.length?e.classList.remove("nav-selected"):d(e,"nav-selected")}(),function(){let e=n(".sidebar");r(e,"data-sidebar-active")}()},clearProjectForm:m,id:e,clearFocus:g,printProjectToFocus:v,printProjectToSidebar:e=>{const t=n(".projects"),o=i("div",{class:"project"}),r=i("h3",{class:"project-title",id:`${e.projectTitle}`});return s(r,e.projectTitle),c(t,o),c(o,r),function(n){const e=i("div",{class:"project-delete"}),t=i("div",{class:"delete-icon"});s(t,"🗑"),c(n,e),c(e,t)}(o),o},printTodos:b,createProjectForm:()=>{const e=n("body"),t=i("div",{class:"project-form"}),r=o("h2"),a=i("div",{class:"form-wrapper"}),d=i("label",{for:"projectTitle",class:"project-label"}),p=i("input",{type:"text",class:"project-title",id:"projectTitle",name:"Project: "}),u=i("div",{class:"btn-container"}),m=i("button",{class:"btn project-submit"}),h=i("button",{class:"btn project-cancel"});s(r,"Create a new project"),s(d,"Project Title"),s(m,"Submit"),s(h,"Cancel"),[[e,t],[t,r],[t,a],[a,d],[a,p],[t,u],[u,h],[u,m]].forEach((n=>c(n[0],n[1]))),l(t)},showProjectForm:()=>p(n(".project-form")),createTodoForm:()=>{const e=n("body"),t=i("div",{class:"todo-form"}),r=o("h2"),d=i("div",{class:"title-info"}),p=i("label",{for:"todoTitle",class:"todo-label"}),u=i("input",{type:"text",id:"todoTitle",class:"todo-input",placeholder:"I need to make a sandwich..."}),m=i("div",{class:"desc-info"}),h=i("label",{for:"todoDesc",class:"todo-label"}),f=i("input",{type:"text",id:"todoDesc",class:"todo-input",placeholder:"It will be a peanut butter & jelly sandwich."}),g=i("div",{class:"priority-container"}),b=i("label",{for:"todoPriority",class:"todo-label"}),x=i("select",{name:"priority",id:"todoPriority"}),v=i("option",{value:"low",selected:"selected"}),w=i("option",{value:"medium"}),j=i("option",{value:"high"}),y=i("div",{class:"duedate-container"}),T=i("label",{for:"dueDate",class:"todo-label"}),k=i("input",{id:"dueDate",class:"todo-date",type:"date",value:a(),min:a()}),F=i("div",{class:"btn-container"}),E=i("button",{class:"btn todo-submit"}),C=i("button",{class:"btn todo-cancel"}),D=i("button",{class:"btn todo-edit-submit d-none"}),P=i("button",{class:"btn todo-edit-cancel d-none"});s(r,"Create a new todo"),s(p,"Todo"),s(h,"Description"),s(b,"Priority"),s(x,"Priority"),s(v,"Low"),s(w,"Medium"),s(j,"High"),s(T,"Due Date"),s(E,"Submit"),s(D,"Submit"),s(C,"Cancel"),s(P,"Cancel"),[[e,t],[t,r],[t,d],[d,p],[d,u],[t,m],[m,h],[m,f],[t,g],[g,b],[g,x],[x,v],[x,w],[x,j],[t,y],[y,T],[y,k],[t,F],[F,C],[F,E],[F,P],[F,D]].forEach((n=>c(n[0],n[1]))),l(t)},showTodoForm:h,returnInfoFromTodoForm:()=>({todoTitle:n("#todoTitle").value,description:n("#todoDesc").value,dueDate:n("#dueDate").value,priority:n("#todoPriority").value}),returnInfoFromProjectForm:()=>({projectTitle:n("#projectTitle").value}),$:n}})();let t,o=[];function r(n){!function(n){n.children&&n.children[1].firstChild.addEventListener("click",(()=>{n.classList.toggle("completed")}))}(n),function(n){if(!n.children)return;let t=e.getTodoInnerText(n);n.children[1].children[1].addEventListener("click",(()=>{let e=u(t,c().todos);c().removeTodo(e),n.remove()}))}(n),p(n)}function i(n){t=n}function c(){return t}function s(n,t){t.firstChild.addEventListener("click",(()=>{i(n),e.toggleSidebarAndNav();let t=e.printProjectToFocus(n);t&&(l(t),r(t))}))}function l(n){n.forEach((n=>{n.firstChild.addEventListener("click",(()=>{e.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))}function p(n){n.children&&n.children[1].lastChild.addEventListener("click",(()=>{const t=e.getTodoInnerText(n),o=u(t,c().todos);e.showEditForm(),e.populateTodoForm(t),e.$(".todo-edit-submit").onclick=()=>{let n=T(e.returnInfoFromTodoForm());c().todos.splice(o,1,n),l(e.printProjectToFocus(c())),e.hideEditForm(),e.clearTodoForm()},e.$(".todo-edit-cancel").onclick=e.hideEditForm}))}function u(n,e){let t;return e.forEach(((e,o)=>{(function(n,e){return e.todoTitle==n.todoTitle&&e.description==n.description&&e.dueDate==n.dueDate&&e.priority==n.priority})(n,e)&&(t=o)})),t}[["startApp",e.createTodoForm],["startApp",e.createProjectForm],["startApp",function(){e.$(".project-submit").addEventListener("click",(()=>{let n=function(){let n=e.returnInfoFromProjectForm(),t=d(n),r=e.printProjectToSidebar(t);return o[o.push({project:t,elem:r})-1]}();i(n.project),e.changeViewOnSubmit(n.project),s(n.project,n.elem),function(n,t){const r=t.lastChild;let a=o.findIndex((e=>e.project==n));r.addEventListener("click",(()=>{o.splice(a,1),t.remove(),c()==n&&(e.clearFocus(),i(null))}))}(n.project,n.elem)})),e.$(".project-cancel").addEventListener("click",(()=>{e.clearProjectForm(),e.hideProjectForm()}))}],["startApp",function(){const n=T({todoTitle:"Make another todo",description:"add a description to each todo.",dueDate:"12/25/2020",priority:"high"}),t=T({todoTitle:"Delete the first todo",description:"which would then make this the first todo...",dueDate:"3/14/2021",priority:"medium"}),o=d({projectTitle:"Make a todo list",todos:[n,t]}),r={project:o,elem:e.printProjectToSidebar(o)};i(o),e.printProjectToFocus(r.project),s(r.project,r.elem)}],["startApp",function(){e.$(".new-todo").addEventListener("click",e.showTodoForm),e.$(".complete-all").addEventListener("click",e.completeAllTodos),e.$(".delete-all").addEventListener("click",(()=>{0!=c().todos.length&&confirm("are you sure?")&&(c().todos=[],e.printProjectToFocus(c()))}))}],["startApp",function(){e.$(".todo-submit").addEventListener("click",(()=>{let n=e.returnInfoFromTodoForm(),t=T(n);if(!c())return e.hideTodoForm(),e.showWarning(),void e.$(".warning-btn").addEventListener("click",e.hideWarning);c().addTodo(t),l(e.printProjectToFocus(c())),e.hideTodoForm(),e.clearTodoForm()})),e.$(".todo-cancel").addEventListener("click",(()=>{e.hideTodoForm(),e.clearTodoForm()}))}],["newProject",e.showProjectForm],["newProject",e.toggleSidebarAndNav]].forEach((e=>{n.subscribe(e[0],e[1])})),e.$(".nav").addEventListener("click",e.toggleSidebarAndNav),e.id("createProject").addEventListener("click",n.publish.bind(void 0,"newProject")),n.publish("startApp"),document.querySelectorAll(".todo").forEach((n=>{n.firstChild.addEventListener("click",(()=>{e.toggleAttr(n.lastChild,"data-todo-active")})),r(n)}))})()})()})();