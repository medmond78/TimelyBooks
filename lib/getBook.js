var request = require("request");
var getImage = require('./getImage');

//Set up the Twitter client for posting the book
var Twitter = require('twitter');
var credentials = require('../credentials');
var client = new Twitter(credentials);

function searchAndPost(){
	
 //Get the book details from PBS
var options = { method: 'GET',
  url: 'http://www.paperbackswap.com/api/v2/index.php',
  qs: { RequestType: 'RecentlyPosted', Limit: '1' },
  headers: 
   { 'postman-token': '6231a8b4-9d21-4b2e-1dbe-c11677b78c0c',
     'cache-control': 'no-cache',
     'content-type': 'application/json' },
  json: true };

 
request(options, function (error, response, body) {
  if (error) throw new Error(error);

  // Assign URLs as variables and pass to getImage...
  
  details_url = body.Response.Books.Book.BookDetailsLink;
  image_url = body.Response.Books.Book.CoverImages.LargeImage;
  
  getImage(image_url,client,details_url);
});

};

module.exports = searchAndPost
