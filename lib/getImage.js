var image_downloader = require('image-downloader');
var postTweet = require('./postTweet');

function getImage(image_url,client,details_url) {
	
options = {
    url:  image_url, //'http://images.paperbackswap.com/m/43/8643/9780141038643.jpg',
    dest: '/tmp/photo.jpg',        // Save to /path/to/dest/photo.jpg
    done: function(err, filename, image) {
        if (err) {
            throw err;
        }
		//console.log(image_url);
        //console.log('File saved to', filename);
		
		//Send the client and URL to postTweet...
		
		postTweet(client,details_url);
    },
};
image_downloader(options);
}

module.exports = getImage