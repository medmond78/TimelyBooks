# TimelyBooks
A twitter bot for PaperBackSwap.com

Timely Books is the code behind the @TimelyBooks twitter bot. The bot polls the PaperBackSwap website every hour and posts the latest book posted for swapping. The cover image is downloaded and posted to the tweet along with the link.

The repository represents the final version which has been modified to run on AWS Lambda. As such, you'll see the index.js includes a exports.handler that simply calls searchandPost. That function is defined in getBook. Look in the require section of each file to follow the logic chain.

## Authentication
The PBS API does not require authentication for the latest book, however Twitter does require app credentials. The bot looks for 'credentials.js' which as the following format:
```
module.exports = {
  consumer_key: "xx",
  consumer_secret: "yy",
  access_token_key: "zz",
  access_token_secret: "zzz"
}; 
```

## License
MIT
