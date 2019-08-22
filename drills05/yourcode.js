

function populateRecords(records){
  var result = {
    charge: 0,
    'cash advance': 0
  }
  var i;
  var arr = [];
  for(i in records){
    var elToPush = $("<div>");
    if (records[i].type === 'charge'){
      result.charge += Number(records[i].amount)
      elToPush.text(records[i]);
      arr.push(elToPush);
    }
    else if (records[i].type === 'cash advance'){
      result['cash advance'] += Number(records[i].amount);
      elToPush.text(records[i]);
      arr.push(elToPush);
    }
  }
  $(".testOutput").append(arr);
  return result;
}
