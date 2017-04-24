var yakkerInputEl = document.getElementById('yakker-input');
var yakkerBtnEl = document.getElementById('yakker-submit');
var yakkerListContaienr = document.getElementById('yakker-list-container');
var yakkerCounterEl = document.getElementById('yakker-counter');
var maxlength = 140;

function sendYak(){
  var yakkerText = yakkerInputEl.value;
  var yakListItem = document.createElement('li');
  yakListItem.innerText = yakkerText;
  yakkerListContaienr.appendChild(yakListItem);
  yakkerInputEl.value = "";
}

function updateCounter(){
  var yakLength = yakkerInputEl.value.length;
  var wordCount = maxlength - yakLength;
  yakkerCounterEl.innerText = wordCount;
}

function onEnter(e){
  if(e.key === "Enter" &&  !e.shiftKey){
    sendYak();
  }
}

yakkerBtnEl.addEventListener('click', sendYak)

yakkerInputEl.addEventListener('input', updateCounter)

yakkerInputEl.addEventListener('keydown',onEnter)