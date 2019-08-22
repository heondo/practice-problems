function getPath(text){
  var splitString = text.split('/')
  return splitString;
}

function getPathParts(text){
  var colonSplit = text.split('://');
  var innerSplit = colonSplit[1].split(":");
  var evenDeeper = innerSplit[1].split('/');
  // // these contain, the 8000/happy/go/lucky/file.html
  // // split up exclude first and last, combine remaining to create the path
  var path = evenDeeper.slice(1, evenDeeper.length-1).join('/');
  // now split by the protocol, host, port
  var urlObj = {
    protocol: colonSplit[0],
    host: innerSplit[0],
    port: Number(evenDeeper[0]),
    'path': path,
    file: evenDeeper[evenDeeper.length-1]
  };
  return urlObj;
}

function getCapitalCount(array){
  var i;
  var count = 0;
  for (i in array){
    if (array[i][0] === array[i][0].toUpperCase()){
      count++;
    }
  }
  return count;
}

function correctCalcChecker(arrayOfObjs){
  var i;
  var result;
  var correct = [];
  for (i in arrayOfObjs){
    var eq = arrayOfObjs[i];
    switch(eq.op){
      case('/'):
        result = eq.num1 /eq.num2;
        break;
      case('*'):
        result = eq.num1*eq.num2;
        break;
      case('+'):
        result = eq.num1 + eq.num2;
        break;
      case('-'):
        result = eq.num1 - eq.num2;
        break;
    }
    if (result === eq.result){
      correct.push(arrayOfObjs[i])
    }
  }
  return correct;
}

function doMath(){

}
