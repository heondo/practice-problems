

function countOccurences(array, search){
  var iter;
  var count = 0;
  for (iter in array){
    if (array[iter] === search){
      count++;
    }
  }
  return count;
}

function wordLengths(array){
  var iter;
  var newArr = [];
  for (iter in array){
    newArr.push(array[iter].length)
  }
  return newArr;
}

function getMinMaxMean(array){
  var stats = {};
  var min = 10e10;
  var max = 0;
  var mean = 0;
  var iter;
  for (iter in array){
    if (array[iter] < min){
      min = array[iter]
    }
    if (array[iter] > max){
      max = array[iter]
    }
    mean += array[iter];
  }
  mean /= array.length;
  stats.min = min;
  stats.max = max;
  stats.mean = mean;
  return stats;
}

function findMode(array){
  var valCounter = {};
  var iter;
  for (iter in array){
    valCounter[String(array[iter])] = {count: 0,
    position: null};
  }
  for (iter in array) {
    valCounter[String(array[iter])].count++;
    valCounter[String(array[iter])].position = iter;
  }
  // console.log(valCounter)
  // So now I have an objet with keys associated with array. Find the mode of object. if there are two equal modes, get index of each key or something
  // Find max of the array first, then check to see if multiple have the same as the max
  // If that occurs then pick the one where position is greater than the other.
  var max_tracker = 0;
  var indexes_of_number = [];
  const weirdThing = Object.entries(valCounter)
  // console.log(weirdThing)
  for (iter in weirdThing){
    if (weirdThing[iter][1].count > max_tracker){
      max_tracker = weirdThing[iter][1].count;
    }
  //
  }
  // max number is now a known entity.
  for (iter in weirdThing){
    if (weirdThing[iter][1].count === max_tracker){
      indexes_of_number.push(weirdThing[iter][1].position)
    }
  }
  // console.log("indexes of maxes:", indexes_of_number);
  // const weirderThing = Object.keys(valCounter);
  // console.log("weirderThing", weirderThing)
  if (indexes_of_number.length === 1){
    return array[indexes_of_number[0]];
  }
  else{
    // if there are two potential stuff in index of maxes. Find larger one, return
    if (indexes_of_number[0] > indexes_of_number[1]){
      return array[indexes_of_number[0]]
    }
    else{
      return array[indexes_of_number[1]];
    }
  }
}
