var searchAndPost = require('./lib/getBook');

exports.handler = function(event, context) {
  console.log("inside handler");
  searchAndPost(context.succeed, context.fail);
  

};

