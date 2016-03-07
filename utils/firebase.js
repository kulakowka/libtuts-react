const Firebase = require('firebase')

const firebase = new Firebase('https://' + process.env.APP_ID + '.firebaseio.com')

module.exports = firebase
