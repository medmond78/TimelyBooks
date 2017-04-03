// Load your image



function postTweet(client,details_url) {


var data = require('fs').readFileSync('/tmp/photo.jpg');



// Make post request on media endpoint. Pass file data as media parameter
client.post('media/upload', {media: data}, function(error, media, response) {

  if (!error) {

    // If successful, a media object will be returned.
    //console.log(media);

    // Lets tweet it
    var status = {
      status: 'Here is the latest book from PaperBackSwap! Details are here:' + details_url,
      media_ids: media.media_id_string // Pass the media id string
    }

    client.post('statuses/update', status, function(error, tweet, response) {
      if (!error) {
        console.log(tweet);
      }
    });

  }
});
};


module.exports = postTweet