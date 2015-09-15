app.controller("TodoCtrl", ['$window', '$scope', function($window, $scope){
  $scope.newTask = "";
  $scope.newDueDate = "";
  $scope.showCompleted = true;

  $scope.toggleCompletedText = function(){
    return $scope.showCompleted ? 'Hide Completed' : 'Show Completed';
  }

  $scope.items = [{ text: "Get groceries from the store",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store2",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store3",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store4",
                  dueDate: new Date(),
                  completed: false },
                  { text: "Get groceries from the store5",
                  dueDate: new Date(),
                  completed: false }]
  $scope.pushNewTask = function(){
    $scope.items.push({text: $scope.newTask,
                       dueDate: new Date($scope.newDueDate),
                       completed: false });
    $scope.newTask = "";
    $scope.newDueDate = "";
  }

  $scope.destroyItem = function(idx){
    $scope.items.splice(idx, 1);
  }

  $scope.clearCompleted = function(){
    $scope.items = $scope.items.filter(function(task){
      return !task.completed;
    })
  }
}]);
