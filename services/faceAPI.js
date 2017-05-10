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

    // get emotion scores
    console.log('data', res.faceData[0].scores)
    let emotionScores = [
      res.faceData[0].scores.anger,
      res.faceData[0].scores.contempt,
      res.faceData[0].scores.disgust,
      res.faceData[0].scores.fear,
      res.faceData[0].scores.happiness,
      res.faceData[0].scores.neutral,
      res.faceData[0].scores.sadness,
      res.faceData[0].scores.surprise
    ]

    var largest = Math.max.apply(Math, emotionScores);
    console.log(largest)


    next()
  }).catch((err) => {
    console.log('ERRERERERER', err)
  })
}

module.exports = {
  fetchEmotions
}



