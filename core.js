var redditViewer = angular.module('redditViewer', ['ngSanitize']);

// controller for web app
redditViewer.controller('mainController', ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $scope.articles = []; // stores a list of sanitized articles as returned by a HTTP GET request to the RESTful API
        $scope.formData = {}; // stores user-entered data from the text input field
        $scope.errors = []; // stores a list of any errors that may have been returned by a HTTP GET request to the RESTful API

        // Make a HTTP GET request to the Reddit API to obtain JSON objects correspoding the articles in a subreddit
        $scope.fetchArticles = function() {
            $http({
                url: "http://34.204.46.161:8080/api", 
                method: "GET",
                params: {subreddit: $scope.formData.text}  
            }).then(function(data){
                $scope.formData = {};
                if ('error' in data.data){ // if an error has occured, clear artciles and add error to $scope.errors be displayed
                    $scope.articles = [];
                    $scope.errors = [data.data];
                }
                else{ // if no error has occured clear any previous errors and add articles to $scope.article to be displayed
                    $scope.articles = data.data.articles; 
                    $scope.errors = [];
                }
            });
        };

        // Inject a reddit article's fulltext_html attribute into the webpage's HTML to preserve formatting
        $scope.renderTextHTML = function(text) {
            return $sce.trustAsHtml(text);
        };

        // Inject HTML to display a reddit article's image into the webpage's HTML
        $scope.renderImageHTML = function(img) {
            if (img != null) { // if reddit article contains an image
                var link = '<img src="'+ img.url + '" height="' + img.height +'" width="' + img.width + '"></img>';

            }
            return $sce.trustAsHtml(link);
        }
    }
]);
