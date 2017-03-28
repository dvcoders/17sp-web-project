var yakkerBtnEl = document.getElementById('yakker-submit');
var yakkerInputEl = document.getElementById('yakker-input');
var listContainerEl = document.getElementById('yakker-list-container');
var yakkerCounterEl = document.getElementById('yakker-word-count');
var maxWordLength = 140; 

function sendMessage(){
  var yakkerText = yakkerInputEl.value;
  var listItem = document.createElement('li');
  listItem.innerText = yakkerText;
  listContainerEl.appendChild(listItem);
}

yakkerBtnEl.addEventListener('click', sendMessage)

yakkerInputEl.addEventListener('input', function(){
  var messageLength = yakkerInputEl.value.length;
  var wordCount = maxWordLength - messageLength;
  yakkerCounterEl.innerText = wordCount;
})

yakkerInputEl.addEventListener('keydown', function(event) {
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault()
    sendMessage();
  }
});