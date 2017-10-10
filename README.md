# Reddit Article Viewer App

<p>This repo contains a web app that displays recent articles/posts contained within a specific subreddit on Reddit.com. The following frameworks/ technologies were used:</p>
  - Node.js
  - Express.js
  - AngularJS
  - Bootstrap
  - Postman
  - Amazon AWS
  - JavaScript/HTML/CSS
  
# Installation Instructions

<p><b>Step 1: </b>Clone this repository using the git clone command.
<b>Step 2: </b>If not already installed, install Node.js and npm (node package manager).
<b>Step 3: </b>On linux platforms, run the following command: <i>sudo npm install package-lock</i>
  On windows platforms, run command prompt as an adminstrator and run the following command: <i>npm install package-lock</i>
This installs the dependencies for the web app.
<b>Step 4: </b>Open core.js in a text editor of your choice. On line 13, set the url to the public IP of the machine on which you are installing the web app. For development purposes, localhost should suffice. Line  4 should look like this when you are done: <i>url: "http://<public ip here>:8080/api"</i>
<b>Step 5: </b> In a terminal, navigate to the directory where you cloned the git repositiory. Then run the following command: <i>node server.js</i>
  This will start the server. You should see the following message printed in the console: <i>Listening to port 8080</i></p>
