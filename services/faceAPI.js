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
      'url': req.body.url
      // 'url': pic
    })
  }

  fetch(API_URL, PARAMS).then(r => r.json()).then((data) => {
    let body = JSON.parse(PARAMS.body)
    res.faceData = data
    res.faceData.imageLink = body.url
    next()
  }).catch((err) => {
    console.log('ERRERERERER', err)
  })
}

module.exports = {
  fetchEmotions
}

// [
//   {
//     faceRectangle: {
//       height: 116,
//       left: 150,
//       top: 150,
//       width: 116
//     },
//     scores: {
//       anger: 0.0000046557775,
//       contempt: 0.00002102154,
//       disgust: 0.00002325293,
//       fear: 0.0000013821799,
//       happiness: 9.6941406e-8,
//       neutral: 0.00939752,
//       sadness: 0.9905514,
//       surprise: 6.704521e-7
//     }
//   },
//   imageLink: 'http://i.imgur.com/hxVx9.jpg'
// ]

