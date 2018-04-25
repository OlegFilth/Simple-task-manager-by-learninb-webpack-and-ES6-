
export const uiController = (() => {
  const domElements = {
    taskForm: document.querySelector('.task-form'),
    taskInput: document.querySelector('.task-form__input'),
    addBtn: document.querySelector('.task-form__add'),
    filterInput: document.querySelector('.js-filter-task'),
    taskList: document.querySelector('.collection'),
    clearBtn: document.querySelector('.js-clear-task'),
    taskItemTemplate: document.querySelector('template').content.querySelector('.collection-item'),
  };
  
  return {
    getDomElements: () => domElements,

    getInput: () => {
      if (domElements.taskInput.value !== '') {
        return  domElements.taskInput.value;
      }
    },
    clearField: () => {
      domElements.taskInput.value = '';
    },
    addListItem: (obj) => {
      let cloneNode;
      cloneNode = domElements.taskItemTemplate.cloneNode(true);
      cloneNode.setAttribute('id', 'task-' + obj.id);
      cloneNode.insertAdjacentHTML('afterbegin', obj.description);
      domElements.taskList.insertBefore(cloneNode, domElements.taskList.firstChild);
    },
    deleteListItem(id) {
      document.querySelector(`#${id}`).remove();
    },
    deleteAll: () => domElements.taskList.innerHTML = '',
    filter:() => {
      const value = domElements.filterInput.value.toLowerCase();
      const listItems = document.querySelectorAll('.collection-item');
      if (listItems.length > 0) {
        Array.from(listItems).forEach((element) => {
          if (element.textContent.includes(value)) {
            element.style.display = 'flex';
          } else {
            element.style.display = 'none';
          }
        });
      }

    },
    displayLocalStorage: (items) => {
      let cloneNode;
      items.forEach((element) => {
        cloneNode = domElements.taskItemTemplate.cloneNode(true);
        cloneNode.setAttribute('id', 'task-' + element.id);
        cloneNode.insertAdjacentHTML('afterbegin', element.description);
        domElements.taskList.insertBefore(cloneNode, domElements.taskList.firstChild);
      });
    }
  }
})();
  


