const fetch = require('node-fetch')

const AUTHORIZE_URL = 'https://accounts.spotify.com/authorize'
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/')

const LINK = `${AUTHORIZE_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}`


let authorize = function(req, res, next) {
  console.log('AUTHORIZE RUNNING')
  fetch(LINK).then((data) => {
    next()
  })
}

module.exports = {
  authorize
}
