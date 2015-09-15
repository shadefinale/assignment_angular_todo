app.directive('todoItem', function(){

  return {
    templateUrl: 'js/directives/todoItemRow.html',
    restrict: 'A',
    scope: {
      item: '=',
      index: '='
    }
  };

});