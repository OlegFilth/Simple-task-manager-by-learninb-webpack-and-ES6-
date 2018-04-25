!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,o;e.localstoreController=(r={tasks:[]},o=function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=e,this.description=n},{addItem:function(t){var e,n=void 0;return n=r.tasks.length,null!==localStorage.getItem("items")&&(r.tasks=JSON.parse(localStorage.getItem("items")),n=r.tasks.length),e=new o(n,t),void 0!==t&&r.tasks.push(e),localStorage.setItem("items",JSON.stringify(r.tasks)),console.log(r),e},deleteItem:function(t){var e;t=Number(t),r.tasks=JSON.parse(localStorage.getItem("items")),e=r.tasks.findIndex(function(e){return t==e.id}),r.tasks.splice(e,1),localStorage.setItem("items",JSON.stringify(r.tasks))},deleteAll:function(){r.tasks=[],localStorage.setItem("items",JSON.stringify(r.tasks))},getItems:function(){var t=void 0;return null!==localStorage.getItem("items")&&(t=JSON.parse(localStorage.getItem("items"))),t}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r;e.uiController=(r={taskForm:document.querySelector(".task-form"),taskInput:document.querySelector(".task-form__input"),addBtn:document.querySelector(".task-form__add"),filterInput:document.querySelector(".js-filter-task"),taskList:document.querySelector(".collection"),clearBtn:document.querySelector(".js-clear-task"),taskItemTemplate:document.querySelector("template").content.querySelector(".collection-item")},{getDomElements:function(){return r},getInput:function(){if(""!==r.taskInput.value)return r.taskInput.value},clearField:function(){r.taskInput.value=""},addListItem:function(t){var e=void 0;(e=r.taskItemTemplate.cloneNode(!0)).setAttribute("id","task-"+t.id),e.insertAdjacentHTML("afterbegin",t.description),r.taskList.insertBefore(e,r.taskList.firstChild)},deleteListItem:function(t){document.querySelector("#"+t).remove()},deleteAll:function(){return r.taskList.innerHTML=""},filter:function(){var t=r.filterInput.value.toLowerCase(),e=document.querySelectorAll(".collection-item");e.length>0&&Array.from(e).forEach(function(e){e.textContent.includes(t)?e.style.display="flex":e.style.display="none"})},displayLocalStorage:function(t){var e=void 0;t.forEach(function(t){(e=r.taskItemTemplate.cloneNode(!0)).setAttribute("id","task-"+t.id),e.insertAdjacentHTML("afterbegin",t.description),r.taskList.insertBefore(e,r.taskList.firstChild)})}})},function(t,e,n){"use strict";var r,o,i,a,s,l,c,u,d=n(1),f=n(0);(r=d.uiController,o=f.localstoreController,i=r.getDomElements(),a=function(t){var e=void 0;t.preventDefault();var n=r.getInput();r.clearField(),void 0!==n&&(e=o.addItem(n),r.addListItem(e))},s=function(t){var e=void 0,n=void 0;"I"===t.target.tagName&&(n=t.target.parentNode.parentNode.id)&&(r.deleteListItem(n),e=(n=n.split("-"))[1],o.deleteItem(e))},l=function(){o.deleteAll(),r.deleteAll()},c=function(){r.filter()},u=function(){var t=o.getItems();t&&r.displayLocalStorage(t)},{init:function(){i.addBtn.addEventListener("click",a),i.taskList.addEventListener("click",s),i.clearBtn.addEventListener("click",l),i.filterInput.addEventListener("keyup",c),document.addEventListener("DOMContentLoaded",u)}}).init()}]);