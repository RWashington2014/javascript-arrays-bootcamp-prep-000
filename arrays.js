//Arrays lab

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element){

  array =  [element, ...array]
    return array

}
function destructivelyAddElementToBeginningOfArray(array, element){
  var array = []
  array.push(element);
  
  return array

}
