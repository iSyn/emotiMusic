const fetch = require('node-fetch')

const API_URL = 'https://api.spotify.com/v1/search'
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const REDIRECT_URI = encodeURIComponent('http://localhost:3000/image')

let getPlaylist = function(req, res, next) {
  console.log('getPlaylist function firing')
  let link = `${API_URL}?q=${res.faceData[0].largestEmotion}&type=playlist`
  fetch(link).then(r => r.json()).then((data) => {
    res.faceData.playlists = data
    next()
  })
}


module.exports = {
  getPlaylist
}
