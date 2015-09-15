app.factory('todoService', function(){
  var obj = {};

  _items = [{ text: "Get groceries from the store",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store2",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store3",
                  dueDate: new Date(),
                  completed: true },
                  { text: "Get groceries from the store4",
                  dueDate: new Date('9-13-2015'),
                  completed: false },
                  { text: "Get groceries from the store5",
                  dueDate: new Date('9-14-2015'),
                  completed: false }];

  obj.getItems = function(){
    return _items;
  }

  obj.pushItem = function(item){
    _items.push(item);
  }

  obj.destroyItem = function(item){
    var idx = _items.indexOf(item);
    _items.splice(idx, 1);
  };

  obj.clearCompleted = function(){
    _items = _items.filter(function(task){
      return !task.completed;
    });
  };

  return obj;
})
