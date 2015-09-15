app.controller("TodoCtrl", ['$window', '$scope', 'todoService', '$filter', function($window, $scope, todoService, $filter){
  $scope.newTask = "";
  $scope.newDueDate = "";
  $scope.showCompleted = true;
  $scope.items = todoService.getItems();
  $scope.orderFilter = '';

  $scope.currentFilter = function(){
    return $filter($scope.orderFilter);
  };

  $scope.toggleCompletedText = function(){
    return $scope.showCompleted ? 'Hide Completed' : 'Show Completed';
  };

  $scope.toggleCompleted = function(){
    $scope.showCompleted = !$scope.showCompleted;
  };

  $scope.pushNewTask = function(){

    todoService.pushItem({text: $scope.newTask,
                       dueDate: new Date($scope.newDueDate),
                       completed: false });

    $scope.newTask = "";
    $scope.newDueDate = "";
  };

  $scope.clearCompleted = function(){
    todoService.clearCompleted();
  };

  $scope.destroyItem = function(idx){
    todoService.destroyItem(idx);
  };

}]);
