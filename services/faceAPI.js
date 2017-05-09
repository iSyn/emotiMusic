const fetch = require('node-fetch')

const API_URL = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize'
const API_KEY = process.env.MICROSOFT_API_KEY

let fetchEmotions = function(req, res, next) {

  const PARAMS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': API_KEY
    },
    body: JSON.stringify({
      'url': req.body.url
      // 'url': pic
    })
  }

  fetch(API_URL, PARAMS).then(r => r.json()).then((data) => {
    let body = JSON.parse(PARAMS.body)
    res.faceData = data
    res.faceData.imageLink = body.url
    console.log('DATA', data)
    next()
  }).catch((err) => {
    console.log('ERRERERERER', err)
  })
}

module.exports = {
  fetchEmotions
}



