// Dependencies
var express 	= require('express');
var app 		= express();
var bodyParser 	= require('body-parser');
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

// Configure app to use bodyParser() so we can process data associated with a request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============================================================================================
// ROUTES
// ============================================================================================

var router = express.Router();

/** 
 * HTTP GET top articles from Reddit API for specified subreddit
 * Success: send data returned by HTTP GET to Reddit API
 * Failure: send an appropriate status code and message
 */
router.get('/api', function(req, res) {
	if ('subreddit' in req.query) { // if required query paramater was passed, get data from Reddit API
		var url = 'https://www.reddit.com/r/' + req.query.subreddit +'/.json?limit=30&raw_json=1';

		// Configure and send HTTP GET request
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.open("GET", url, true);
		xmlHttp.onload = function (e) { // callback
			if (xmlHttp.readyState === 4 && xmlHttp.status === 200){ // if request finished successfully
				var processedData = sanitizeArticleData(xmlHttp.responseText);
				if ("error" in processedData){ 
					res.status(processedData['error']).send(processedData);
				}
				res.send(processedData);
			}
			else{
				res.send(xmlHttp.responseText);
			}
		}
		xmlHttp.send(); // asynchronously send HTTP GET request to Reddit API
	} 
	else {
		res.status(422).send("The following required parameters were not passed: subreddit");
	}
});

router.get('/', function(req, res) {
          res.sendfile('index.html'); // load HTML with embedded Angular
});

// Unsupported
router.post('/api', function(req, res) {
	res.status(405).send("POST not supported.");
});

// Unsupported
router.put('/api', function(req, res) {
	res.status(405).send("PUT not supported.");
});

// Unsupported
router.patch('/api', function(req, res) {
	res.status(405).send("PATCH not supported.");
});

// Unsupported
router.delete('/api', function(req, res) {
	res.status(405).send("DELETE not supported.");
});

// Register routes
app.use('/', router); 
app.use(express.static(__dirname + '/'));

// Set port and start the server
var port = process.env.PORT || 8080;
app.listen(port);
console.log('Listening to port ' + port);

// ============================================================================================
// FUNCTIONS
// ============================================================================================

/** 
 * Sanitizes the data retrieved from the Reddit API
 * @param {string} data - A string representation of the JSON object returned by the Reddit API.
 * @returns {associative array} sanitized articles - An associative array representing a JSON 
 *								object containing the 'articles' key. 'articles' corresponds to an array 
 *								of JSON objects, each of which represents a article in the subreddit.
 *								Returns an associative array containing an error message if data
 *								cannot be properly sanitized.
 */
function sanitizeArticleData (data) {
	// return error message if data cannot be parsed into a JSON object
	try{
		var subredditData = JSON.parse(data);
	}
	catch(err){
		return {
				'message': "Failed to parse JSON",
				'error': 422
			};
	}

	// return subredditData if it contains an error message
	if ("error" in subredditData){
		console.log("Error: " + subredditData.error);
		return subredditData;
	}

	// proceed with data sanitation
	var articles = subredditData.data.children; // list of articles to sanitize
	var sanitizedArticles = [];
	for (var i = 0; i < articles.length; i++) {
		var articleData = articles[i].data;

		sanitizedArticle = {
			'title': articleData.title,
			'selftext_html': articleData.selftext_html,
			'score': articleData.score,
			'author': articleData.author,
			'ups': articleData.ups,
			'downs': articleData.downs,
			'image': null
		}

		// if article contains image, add appropriate data to sanitizedArticle
		if ('preview' in articleData) {
			img = articleData.preview.images[0];
			sanitizedArticle.image = {
				'url': img.source.url,
				'width': img.resolutions[img.resolutions.length-1].width,
				'height': img.resolutions[img.resolutions.length-1].height 
			}
		}

		sanitizedArticles.push(sanitizedArticle);
	}

	// return sanitized data
	return {articles: sanitizedArticles};
}