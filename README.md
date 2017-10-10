# Reddit Article Viewer App

This repo contains a web app that displays recent articles/posts contained within a specific subreddit on Reddit.com. The following frameworks/ technologies were used:
  - Node.js
  - Express.js
  - AngularJS
  - Bootstrap
  - Postman
  - Amazon AWS
  - JavaScript/HTML/CSS
  
# Installation Instructions

<p><b>Step 1: </b>Clone this repository using the git clone command.</br>
<b>Step 2: </b>If not already installed, install Node.js and npm (node package manager).</br>
<b>Step 3: </b>In a terminal, navigate to the directory where you cloned the git repositiory. On linux platforms, run the following command: <i>sudo npm install package-lock</i></br>
  On windows platforms, run command prompt as an adminstrator and run the following command: <i>npm install package-lock</i></br>
This installs the dependencies for the web app.</br>
<b>Step 4: </b>Open core.js in a text editor of your choice. On line 13, set the url to the public IP of the machine on which you are installing the web app. For development purposes, localhost should suffice.</br>Line 13 should look like this when you are done: <i>url: "http://[public ip here]:8080/api"</i></br>
<b>Step 5: </b>Run the following command: <i>node server.js</i></br>
  This will start the server. You should see the following message printed in the console: <i>Listening to port 8080</i></br>
<b>Step 6: </b>In a browser, navigate to <i>http://[public ip here]:8080</i> Here, you should see the GUI for the app. If you wish to access the api directly, navigate to <i>http://[public ip here]:8080/api?subreddit=[your query here]</i>. Note that <i>[public ip here]</i> is the same ip that you set in Step 4, and that <i>[your query here]</i> is the name of the subreddit that you want to fetch articles/posts from.</p>

I have included a few Postman tests for the API in Cisco_API_Project.postman_collection.json. You should be able to import these tests from Postman by clicking <i>File</i> --> <i>import</i> and then selecting Cisco_API_Project.postman_collection.json.
