import { uiController } from './ui';
import { localstoreController } from './localstorage'

const controller = ((uiCtrl, lcCtrl) => {

  const DOM = uiCtrl.getDomElements();

  const setupEventListeners = () => {
    DOM.addBtn.addEventListener('click', addItem);
    DOM.taskList.addEventListener('click', deleteItem);
    DOM.clearBtn.addEventListener('click', deleteAllItems);
    DOM.filterInput.addEventListener('keyup', filterItems);
    document.addEventListener('DOMContentLoaded', displayLocalStorage);
  };

  const addItem = (event) => {
    let newItem;
    event.preventDefault();
    const input = uiCtrl.getInput();
    uiCtrl.clearField();
    if (input !== undefined) {
      newItem = lcCtrl.addItem(input);
      uiCtrl.addListItem(newItem);
    }
  };

  const deleteItem = (event) => {
    let id, itemID;
    if (event.target.tagName === 'I') {
      itemID = event.target.parentNode.parentNode.id;
      if (itemID) {
        uiCtrl.deleteListItem(itemID);
        itemID = itemID.split('-');
        id = itemID[1];
        lcCtrl.deleteItem(id);
      }
    } return;
  }

  const deleteAllItems = () => {
    lcCtrl.deleteAll();
    uiCtrl.deleteAll();
  }

  const filterItems = () => {
    uiCtrl.filter();
  }

  const displayLocalStorage = () => {
    const storageItems = lcCtrl.getItems();
    if (storageItems) uiCtrl.displayLocalStorage(storageItems);
  }

  return {
    init: () => {
      setupEventListeners();
    }
  }
})(uiController, localstoreController);

controller.init();