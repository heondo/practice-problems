

function removeClassFromElement(element, text){
  $(element).removeClass(text);
}

function toggleClassOnElement(element, text){
  $(element).toggleClass(text);
}

function hideElements(target, type){
  switch(type){
    case 'removeChildren':
      $(target).empty();
      break;
    case 'removeSelf':
      $(target).remove();
      break;
    case 'hide':
      $(target).hide();
      break;
  }
}

function addAttributeToElement(element, attribute, value){
  $(element).attr(attribute, value);
}

function putPosInElement(){

}
