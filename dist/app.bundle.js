!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:o})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r;e.localstoreController=(o={tasks:[]},r=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.description=n},{addItem:function(t){var e,n=void 0;return n=o.tasks.length,null!==localStorage.getItem("items")&&(o.tasks=JSON.parse(localStorage.getItem("items")),n=o.tasks.length),e=new r(n,t),void 0!==t&&o.tasks.push(e),localStorage.setItem("items",JSON.stringify(o.tasks)),console.log(o),e},deleteItem:function(t){t=Number(t),o.tasks=JSON.parse(localStorage.getItem("items")),index=o.tasks.findIndex(function(e){return t==e.id}),o.tasks.splice(index,1),localStorage.setItem("items",JSON.stringify(o.tasks))},deleteAll:function(){o.tasks=[],localStorage.setItem("items",JSON.stringify(o.tasks))},getItems:function(){var t=void 0;return null!==localStorage.getItem("items")&&(t=JSON.parse(localStorage.getItem("items"))),t}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o;e.uiController=(o={taskForm:document.querySelector(".task-form"),taskInput:document.querySelector(".task-form__input"),addBtn:document.querySelector(".task-form__add"),filterInput:document.querySelector(".js-filter-task"),taskList:document.querySelector(".collection"),clearBtn:document.querySelector(".js-clear-task"),taskItemTemplate:document.querySelector("template").content.querySelector(".collection-item")},{getDomElements:function(){return o},getInput:function(){if(""!==o.taskInput.value)return o.taskInput.value},clearField:function(){o.taskInput.value=""},addListItem:function(t){var e=void 0;(e=o.taskItemTemplate.cloneNode(!0)).setAttribute("id","task-"+t.id),e.insertAdjacentHTML("afterbegin",t.description),o.taskList.insertBefore(e,o.taskList.firstChild)},deleteListItem:function(t){document.querySelector("#"+t).remove()},deleteAll:function(){return o.taskList.innerHTML=""},filter:function(){var t=o.filterInput.value.toLowerCase(),e=document.querySelectorAll(".collection-item");console.log(e),e.length>0&&Array.from(e).forEach(function(e){console.log(e.textContent.toLocaleLowerCase().includes(t)),e.textContent.includes(t)?e.style.display="flex":e.style.display="none"})},displayLocalStorage:function(t){var e=void 0;t.forEach(function(t){(e=o.taskItemTemplate.cloneNode(!0)).setAttribute("id","task-"+t.id),e.insertAdjacentHTML("afterbegin",t.description),o.taskList.insertBefore(e,o.taskList.firstChild)})}})},function(t,e,n){"use strict";var o,r,i,l,s,a,c,u,d=n(1),f=n(0);(o=d.uiController,r=f.localstoreController,i=o.getDomElements(),l=function(t){var e=void 0;t.preventDefault();var n=o.getInput();o.clearField(),void 0!==n&&(e=r.addItem(n),o.addListItem(e))},s=function(t){var e=void 0,n=void 0;(n=t.target.parentNode.parentNode.id)&&(o.deleteListItem(n),e=(n=n.split("-"))[1],r.deleteItem(e))},a=function(){r.deleteAll(),o.deleteAll()},c=function(){o.filter()},u=function(){var t=r.getItems();t&&o.displayLocalStorage(t)},{init:function(){i.addBtn.addEventListener("click",l),i.taskList.addEventListener("click",s),i.clearBtn.addEventListener("click",a),i.filterInput.addEventListener("keyup",c),document.addEventListener("DOMContentLoaded",u)}}).init()}]);