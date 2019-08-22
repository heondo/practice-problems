
function sumArray(array){
  var i;
  var sum =0;
  for (i in array){
    sum+= array[i];
  }
  return sum;
}

function fitWithinVal(array, target){
  var i;
  var sum =0;
  var newArr = [];
  for (i in array){
    sum += array[i];
    if (sum === target){
      return newArr;
    }
    else if (sum < target){
      newArr.push(array[i]);
    }
    else if (sum > target){
      sum -= array[i]
    }
  }
  return newArr;
}

function getAllNamesShorterThan(array, limit){
  var i;
  var newArr = [];
  for (i in array){
    if (array[i].length < limit){
      newArr.push(array[i])
    }
  }
  return newArr;
}

function makeLabel(someObject){
  var home = someObject['home address']
  return someObject.greeting + " " + someObject.givenName + " " + someObject.familyName + "\n" + home.streetNumber + " " + home.streetName + "\n" + home.city + ", " + home.state + " " + home.zip;
}
