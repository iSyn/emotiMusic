const { Router } = require('express')
const faceAPI = require('./../services/faceAPI.js')

let imageRoute = Router()

imageRoute.post('/', faceAPI.fetchEmotions, (req, res) => {
  res.render('image', {
    faceData: res.faceData
  })
})

module.exports = imageRoute

// [
//   { faceRectangle: { height: 253, left: 356, top: 269, width: 253 },
//   scores: {
//      anger: 0.000459050178,
//      contempt: 0.00705603557,
//      disgust: 0.004880167,
//      fear: 0.000337471574,
//      happiness: 0.7540969,
//      neutral: 0.1812043,
//      sadness: 0.000899531238,
//      surprise: 0.05106654
//    }
//  }
// ]
