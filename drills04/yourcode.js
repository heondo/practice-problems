

function changeElements(selector){
  var elements = $(selector).each(function(){
    var num = $(this).text();
    var newNum;
    // $(this).text(texts+'hello')
    switch(num){
      case 'one':
        newNum =  1;
        break;
      case 'two':
        newNum =  2;
        break;
      case 'three':
        newNum =  3;
        break;
      case 'four':
        newNum =  4;
        break;
      case 'five':
        newNum =  5;
        break;
      case 'six':
        newNum =  6;
        break;
      case 'seven':
        newNum =  7;
        break;
      case 'eight':
        newNum =  8;
        break;
      case 'nine':
        newNum =  9;
        break;
      default:
        newNum =  num;
        break;
    }
    $(this).text(newNum)
  });
  // switch(num){
  //   case 'one':
  //     newNum =  1;
  //   case 'two':
  //     newNum =  2;
  //   case 'three':
  //     newNum =  3;
  //   case 'four':
  //     newNum =  4;
  //   case 'five':
  //     newNum =  5;
  //   case 'six':
  //     newNum =  6;
  //   case 'seven':
  //     newNum =  7;
  //   case 'eight':
  //     newNum =  8;
  //   case 'nine':
  //     newNum =  9;
  //   default:
  //     newNum =  num;
  // }
}

function appendTextToElement(selector, text){
  var elements = $(selector).each(function(){
    var newText = $(this).text()+text;
    $(this).text(newText);
  })
}

function addClass(selector, text){
  var counter = 0;
  var elements = $(selector).each(function(){
    $(this).toggleClass(text);
    counter++;
  })
  return counter;
}

function removeElements(selector){
  $(selector).remove();
}
