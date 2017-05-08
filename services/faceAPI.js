const fetch = require('node-fetch')

const API_URL = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize'
const API_KEY = '9955adc574574c438dab87cab4b776c5'

let pic = 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/10847823_317412908466200_8932690225636238172_n.jpg?oh=2f0988c6e752f135fa9642f05c55bd4e&oe=59802362'

let fetchEmotions = function(req, res, next) {

  const PARAMS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': API_KEY
    },
    body: JSON.stringify({
      // 'url': req.body.url
      'url': pic
    })
  }

  fetch(API_URL, PARAMS).then(r => r.json()).then((data) => {
    res.faceData = data
    console.log('res.faceData', res.faceData)
    next()
  })
}

module.exports = {
  fetchEmotions
}
