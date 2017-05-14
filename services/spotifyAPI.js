const fetch = require('node-fetch')

const AUTH_URL = 'https://accounts.spotify.com/authorize/'
const API_URL = 'https://api.spotify.com/v1/search'
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/image')
const FULL_AUTH_URL = `${AUTH_URL}?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&show_dialog=true`

let getPlaylist = function(req, res, next) {
  console.log('getPlaylist function firing')
  let link = `${API_URL}?q=${res.faceData[0].largestEmotion}&type=playlist`
  fetch(link).then(r => r.json()).then((data) => {
    res.faceData.playlists = data
    next()
  })
}

let authorize = (req, res, next) => {
  console.log('authorize firing')
  // res.redirect(FULL_AUTH_URL)
  // let code = req.query.codex
  // fetch(FULL_AUTH_URL).then((data) => {
  //   console.log(data)
  //   next()
  // })
  next()
}


module.exports = {
  getPlaylist,
  authorize
}
