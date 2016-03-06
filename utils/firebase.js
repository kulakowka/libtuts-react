import Firebase from 'firebase'

const firebase = new Firebase('https://' + process.env.APP_ID + '.firebaseio.com')

export default firebase
