
function number1(text, array){
  var output = [];
  for (var i in array){
    if (text.length > array[i].length){
      output.push(array[i])
    }
  }
  return output;
}

console.log(number1('four', ['heondo', 'darryl', 'ark', 'd',' dfaefae']))
