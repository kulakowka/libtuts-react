-------------------------------------------------------------------------------
# Создание пользователя 
--------------------------------- JavaScript ----------------------------------

const ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com')

// Generate a new push ID for the new user
const uid = ref.getAuth().uid

// Create the data we want to update
const data = {
  ['users/' + uid + '/profile']: {
    username: @username,
    fullName: 'Anton Kulakov',
    createdAt: Firebase.ServerValue.TIMESTAMP,
    updatedAt: Firebase.ServerValue.TIMESTAMP
  },

  ['users_usernames_to_uids/' + @username]: uid
}

// Do a deep-path update
ref.update(data, function(error) {
  if (error) {
    console.log('Error updating data:', error)
  }
})

-------------------------------------------------------------------------------
# Создание туториала
--------------------------------- JavaScript ----------------------------------

const ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com')

// Generate a new push ID for the new tutorial
const tutorialId = ref.child('tutorials').push()

// Get author uid
const uid = ref.getAuth().uid

// Create the data we want to update
const data = {

  ['tutorials/' + tutorialId + '/data']: {
    title: 'Tutorial 1',
    source: 'http://blog.facebook.com/post/123.html',
    domain: 'blog.facebook.com',
    keywords: ['react', 'redux'],
    createdAt: Firebase.ServerValue.TIMESTAMP,
    updatedAt: Firebase.ServerValue.TIMESTAMP
    author: uid
  },

  ['tutorials/' + tutorialId + '/content']: {
    markdown: 'Text for tutorial 1',
    html: '<p>Text for tutorial 1</p>'
  },

  ['tutorials/' + tutorialId + '/languages']: {
    @language_id: true,
    @language_id: true,
    @language_id: true
  },

  ['tutorials/' + tutorialId + '/projects']: {
    @project_id: true,
    @project_id: true
  },

  ['users/' + uid + '/tutorials/' + tutorialId]: true,

  languages.map => ['languages/' + @language_id + '/tutorials/' + tutorialId]: true,

  projects.map => ['projects/' + @project_id + '/tutorials/' + tutorialId]: true

}

// Do a deep-path update
ref.update(data, function(error) {
  if (error) {
    console.log('Error updating data:', error)
  }
})

-------------------------------------------------------------------------------
# Создание комментария
--------------------------------- JavaScript ----------------------------------

const ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com')

// Generate a new push ID for the new comment
const commentId = ref.child('comments').push()

// Get author uid
const uid = ref.getAuth().uid

// Create the data we want to update
const data = {

  ['comments/' + commentId + '/data']: {
    content: 'Comment 1',
    contentHtml: '<p>Comment 1</p>',
    author: uid,
    tutorial: @tutorial_id,
    createdAt: Firebase.ServerValue.TIMESTAMP,
    updatedAt: Firebase.ServerValue.TIMESTAMP
  },

  ['users/' + uid + '/comments/' + commentId]: true,
  
  ['tutorials/' + @tutorial_id + '/comments/' + commentId]: true
}

// Do a deep-path update
ref.update(data, function(error) {
  if (error) {
    console.log('Error updating data:', error)
  }
})

-------------------------------------------------------------------------------
# Создание языка программирования
--------------------------------- JavaScript ----------------------------------

const ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com')

// Generate a new push ID for the new language
const languageId = ref.child('languages').push()

// Create the data we want to update
const data = {
  ['languages/' + languageId + '/data']: {
    name: 'JavaScript',
    slug: @slug
  },

  ['languages_slugs_to_ids/' + @slug]: languageId

}

// Do a deep-path update
ref.update(data, function(error) {
  if (error) {
    console.log('Error updating data:', error)
  }
})

-------------------------------------------------------------------------------
# Создание проекта
--------------------------------- JavaScript ----------------------------------

const ref = new Firebase('https://<YOUR-FIREBASE-APP>.firebaseio.com')

// Generate a new push ID for the new project
const projectId = ref.child('projects').push()

// Get author uid
const uid = ref.getAuth().uid

// Create the data we want to update
const data = {
  ['projects/' + projectId + '/data']: {
    name: 'React.js',
    slug: 'react',
    description: 'UI Library',
    homepage: 'http://reactjs.com',
    repository: 'http://github.com/react/react',
    keywords: ['react', 'redux'],
    author: uid,
    createdAt: Firebase.ServerValue.TIMESTAMP,
    updatedAt: Firebase.ServerValue.TIMESTAMP
  },

  languages.map => ['projects/' + projectId + '/languages/' + @language_id]: true,

  ['users/' + uid + '/projects/' + projectId]: true,

  ['projects_slugs_to_ids/' + @slug]: projectId

}
//

// Do a deep-path update
ref.update(data, function(error) {
  if (error) {
    console.log('Error updating data:', error)
  }
})









