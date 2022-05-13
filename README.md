# Nodejs API proxy

## Setup

### `.env`

Rename .env.example file to .env and modify the values to suite your specific needs

If for example you are using [Open Movie Database(OMDb) API](https://omdbapi.com/).

This would be a valid serach https://www.omdbapi.com//?apikey=API_key_value&s=batman.

Your .env would look like this

```bash
API_BASE_URL = "http://www.omdbapi.com/"
API_KEY_NAME = "apikey"
API_KEY_VALUE = "API_key_value"
```

The port to serve the app can also be modified in the .env

### `npm`

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:5000
$ npm run dev

# launch server
$ npm run start
```

## Usage

Once you have setup the environment variables, you can include any other query parameters as needed when hitting the /api endpoint without having to add your key in the client.

For example: https://yourdomain.com/api?s=batman
