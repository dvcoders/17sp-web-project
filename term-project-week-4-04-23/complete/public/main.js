var yakkerInputEl = document.getElementById("yakker-input") // get the input box: textarea
var yakkerCountEl = document.getElementById("yakker-message-count") // get message count
var yakkerButtonEl = document.getElementById("yakker-submit") // get post button: button
var listContainerEl = document.getElementById("yakker-list-container") // get the yakker: ul container
var maxMessageLength = 140;

function cb(data){
  for (var i = 0; i < data.length; i++){
    console.log(data[i]);
    var textEl =  document.createElement("div");
    textEl.className = "yakker-message";
    textEl.innerText = data[i].post;
    var timeEl = document.createElement("time");
    timeEl.innerText = data[i].date.substring(0,10);
    var listItem = document.createElement("li");
    listItem.appendChild(textEl);
    listItem.appendChild(timeEl);

    // append el to the container
    listContainerEl.appendChild(listItem);
  }
}

function getPosts(cb){
  var request = new XMLHttpRequest();
  request.open('GET', '/posts', true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.responseText);
        cb(data);
      } else {
        console.log("We reached our target server, but it returned an error")
      }
    };

    request.onerror = function() {
      console.log("There was a connection error of some sort");
    };

    request.send();
}

getPosts(cb);

// disables the yakker-button based on the message length
function updateButton(messageLength) {
  var isDisabled = messageLength === 0 || messageLength > maxMessageLength;
  yakkerButtonEl.disabled = isDisabled;
}

// updates the message counter to `140 - length of message`
function updateCharacterCount(messageLength) {
  var newColor = Math.round(255 * Math.min(1, messageLength / maxMessageLength));

  yakkerCountEl.innerText = maxMessageLength - messageLength;
  yakkerCountEl.style.color = 'rgb(' + newColor + ',0,0)';
}

function sendMessage() {
  var yakkerText = yakkerInputEl.value;

  if (yakkerText.length <= maxMessageLength) {
    var time = new Date();
    var timeText = time.getFullYear() + "-" + (time.getMonth() + 1) + '-' + time.getDate();

    var textEl =  document.createElement("div");
    textEl.className = "yakker-message";
    textEl.innerText = yakkerText;
    var timeEl = document.createElement("time");
    timeEl.innerText = timeText;
    var listItem = document.createElement("li");

    var data = {
      "message": yakkerText,
      "time": timeText
    };

    var request = new XMLHttpRequest();
    request.open("POST", "/yak");
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));

    listItem.appendChild(textEl);
    listItem.appendChild(timeEl);

    // append el to the container
    listContainerEl.appendChild(listItem);

    // clear out the textare and reset the button and counter
    yakkerInputEl.innerText = "";
    updateButton(0);
    updateCharacterCount(0);
  }
}

yakkerInputEl.addEventListener('input', function(event) {
  var messageLength = event.target.value.length;
  updateButton(messageLength);
  updateCharacterCount(messageLength);
});

// if shift-enter is pressed, send the message
yakkerInputEl.addEventListener('keydown', function(event) {
  if (event.which === 13 && event.shiftKey) {
    event.preventDefault();
    sendMessage();
  }
});

yakkerButtonEl.addEventListener('click', sendMessage, false);
