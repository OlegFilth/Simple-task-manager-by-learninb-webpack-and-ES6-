export const localstoreController = (() => {
  const data = {
    tasks: []
  };
  class Tasks {
    constructor(id, description) {
      this.id = id;
      this.description = description;
    }
  }
  return {
    addItem: (description) => {
      let newItem, id;
      id = data.tasks.length;
      if (localStorage.getItem('items') !== null) {
        data.tasks = JSON.parse(localStorage.getItem('items'));
        id = data.tasks.length
      }
     
      newItem = new Tasks(id, description);

      if (description !== undefined) {
        data.tasks.push(newItem);
      }
      localStorage.setItem('items', JSON.stringify(data.tasks));
      console.log(data);
      return newItem;
    },
    deleteItem: (id) => {
      let curID;
      id = Number(id);
      data.tasks = JSON.parse(localStorage.getItem('items'));
      index = data.tasks.findIndex((element) => id == element.id);
      data.tasks.splice(index, 1);
      localStorage.setItem('items', JSON.stringify(data.tasks));
    },

    deleteAll: () => {
      data.tasks = []
      localStorage.setItem('items', JSON.stringify(data.tasks));
    },

    getItems: () => {
      let items;
      if (localStorage.getItem('items') !== null) {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    }
  }
})();