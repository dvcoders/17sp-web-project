# Yakker Week 3
A simple blogging website which requires frontend, backend, and database. We’ll be using JavaScript for the project.
Basically a Twitter/YikYak clone.

## Overview
We will be setting up a Node.js/Express server to host our project.

## Steps
Rename app.js to main.js and fix the import statement in index.html to reflect the change.

1. Install Node.js/npm<br/>
`npm init`<br/>
Create app.js

2. `npm install express --save`<br/>
Make app.js serve index.html webpage (listen on port 3000)

3. `npm install nodemon --save`<br/>
Make server restart automatically when detecting changes

4. Add start script to package.json

3. `npm install body-parser --save`<br/>
Make server print out message and time everytime user presses button<br/>
Code for client-side AJAX call:
```js
var data = {
  "message": yakkerText,
  "time": timeText
};
var request = new XMLHttpRequest();
request.open("POST", "/yak");
request.setRequestHeader("Content-Type", "application/json");
request.send(JSON.stringify(data));
```

4. `npm install morgan --save`<br/>
Use Morgan to log HTTP requests

## Challenges
Use Express documentation to figure out how to catch and log 404 and 500 errors.
Write incoming messages to file.

## Resources
[Web Overview](https://github.com/dvcoders/intro-web)<br/>
[Node.js](https://nodejs.org/en/)<br/>
[Express](https://expressjs.com/)
