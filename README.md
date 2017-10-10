# Reddit Article Viewer App

This repo contains a web app that displays recent articles/posts contained within a specific subreddit on Reddit.com. The following frameworks/ technologies were used:
  - Node.js
  - Express.js
  - AngularJS
  - Bootstrap
  - Postman
  - AWS
  - JavaScript/HTML/CSS
  
# How it works

The web app can be logically split into two components: 
  - the UI (handled with AngularJS and Bootstrap)
  - the RESTful API (handled with Node.js and Express.js)
  
The UI allows the user to enter the name of a subreddit. When the user clicks the "Fetch Articles" button, the Angular script associated with the UI makes a HTTP GET request to the RESTful API. The RESTful API uses the Reddit API to fetch the data of articles in the subreddit that the user specified (note that the RESTful API sanitizes this data before returning it). The UI then displays the data in a visually appealing manner.

The web app (UI) and the RESTful API are actually running on the same Node server on an AWS EC2 instance. The RESTful API can be accessed at a different endpoint. Specifically, appending <i>/api?subreddit=[query paramater]</i> will allow you to circumvent the UI and access the API directly. Note that <i>[query parameter]</i> is the name of the subreddit you wish to fetch from. 

When a user clicks the "Fetch Articles" button on the web app's UI, the web app makes an HTTP GET request to the API at <i><span class ="nolink">http://34.204.46.161:8080/api?subreddit=_______</span></i> where ______ is the text that the user entered into the text field. This is reiterated in the <b>Link to Web App on AWS</b> section.

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

I have included a few Postman tests for the API in Cisco_API_Project.postman_collection.json. You should be able to import these tests from Postman by clicking <i>File</i> --> <i>import</i> -->  <i>Choose Files</i> and then selecting Cisco_API_Project.postman_collection.json. Note that these tests assume that the web app is running on <i>localhost</i>!

# Link to Web App on AWS
The web app is currently deployed and running on an Amazon EC2 instance. You can access the web app via the EC2's public elastic IP: http://34.204.46.161:8080/ 
The api can be accessed directly at http://34.204.46.161:8080/api. You should see the following: <i>The following required parameters were not passed: subreddit</i>. This is because no subreddit was specified. To specify the subreddit, navigate to http://34.204.46.161:8080/api?subreddit=_____ where _____ is the name of the subreddit you wish to fetch from.
