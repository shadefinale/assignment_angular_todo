app.filter('filterCompleted', function(){

  return function(collection, flag){

    if(!flag){return collection;}

    return collection.filter(function(element){
      return !element.completed;
    });
  };

});

app.filter('completedOnTop', function(){

  return function(collection){
    return collection.sort(function(a,b){
      if( a.completed && b.completed ||
          !a.completed && !b.completed ){
        return 0;
      } else if (a.completed){
        return -1;
      } else { return 1; }
    });
  };

});


app.filter('completedOnBottom', function(){

  return function(collection){
    return collection.sort(function(b,a){
      if( a.completed && b.completed ||
          !a.completed && !b.completed ){
        return 0;
      } else if (a.completed){
        return -1;
      } else { return 1; }
    });
  };

});

app.filter('dueDateAsc', function(){
  return function(collection){
    return collection.sort(function(a, b){
      return b.dueDate - a.dueDate;
    })
  }
})

app.filter('dueDateDesc', function(){
  return function(collection){
    return collection.sort(function(a, b){
      return a.dueDate - b.dueDate;
    })
  }
})

app.filter('filterByCriteria', function(completedOnTopFilter, completedOnBottomFilter, dueDateDescFilter, dueDateAscFilter){
  return function(collection, criteria){
    switch(criteria){
      case 'completedOnTop':
        return completedOnTopFilter(collection);
        break;
      case 'completedOnBottom':
        return completedOnBottomFilter(collection);
        break;
      case 'dueDateDesc':
        return dueDateDescFilter(collection);
        break;
      case 'dueDateAsc' :
        return dueDateAscFilter(collection);
        break;
      default :
        return collection;
        break;
    }
  }
});

