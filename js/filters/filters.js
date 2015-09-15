app.filter('filterCompleted', function(){

  return function(collection, flag){

    if(!flag){return collection;}

    return collection.filter(function(element){
      return !element.completed;
    });
  };

});