# TimelyBooks
A twitter bot for PaperBackSwap.com

Timely Books is the code behind the @TimelyBooks twitter bot. The bot polls the PaperBackSwap website every hour and posts the latest book posted for swapping. The cover image is downloaded and posted to the tweet along with the link.

The repository represents the final version which has been modified to run on AWS Lambda. As such, you'll see the index.js includes a exports.handler that simply calls searchandPost. That function is defined in getBook. Look in the require section of each file to follow the logic chain.

## Authentication
The PBS API does not require authenticaion for the latest book, however Twitter does require app credentials. The bot looks for 'credentials.js' which as the following format:
```
module.exports = {
  consumer_key: "xx",
  consumer_secret: "yy",
  access_token_key: "zz",
  access_token_secret: "zzz"
}; 
```


## Usage
Nodeasaur is a standard node-based JS program run  using
```
npm main.js
```

## API Key
Once you have applied for and been granted an API key, edit *key.JSON* accordingly.
```
{ "apiKey": "Your key here"} 
```
## Input file
The *word.JSON* file is similarly formattedf or you to put the original word in.
```
{ "word": "guitar"}
 
```
## Output
The code gives a simple JSON packet with one or more synonyms (verb and noun), per the API docs.
```
{ noun: { syn: [ 'stringed instrument' ] } }
```


## Contributing

Gladly accepting contributions


## License
MIT
