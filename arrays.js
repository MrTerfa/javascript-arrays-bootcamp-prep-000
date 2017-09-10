var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];


var addElementToBeginningOfArray = function (array,element){
  var newArray = [element,...array];
  return newArray;
}

var destructivelyAddElementToBeginningOfArray = function (array,element){
  array.unshift(element);
  return array;
}

var addElementToEndOfArray = function (array,element){
  var newArray = [array...,element];
  return newArray;
}
/*
var destructivelyAddElementToEndOfArray = function (array,element){
  return array.push(element);
}

var accessElementInArray = function (array,index){
  return array[index];
}

var destructivelyRemoveElementFromBeginningOfArray = function (array){
  return array.shift();
}

var removeElementFromBeginningOfArray = function (array){
  var newArray = array.slice(1);
}

var destructivelyRemoveElementFromEndOfArray = function (array){
  return array.pop();
}

var removeElementFromEndOfArray = function (array){
  var newArray  = array.slice(0,array.length-1);
  return newArray;
}
*/
