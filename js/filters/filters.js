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