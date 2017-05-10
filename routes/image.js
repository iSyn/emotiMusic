const { Router } = require('express')
const faceAPI = require('./../services/faceAPI.js')
const spotifyAPI = require('./../services/spotifyAPI.js')

let imageRoute = Router()

imageRoute.post('/', faceAPI.fetchEmotions, spotifyAPI.authorize, (req, res) => {
  res.render('image', {
    faceData: res.faceData
  })
})

module.exports = imageRoute
