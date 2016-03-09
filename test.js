const DATA_BASE = {
  users: [
    {
      id: 'u-1',
      username: 'kulakowka',
      name: 'Anton'
    }
  ],
  tutorials: [
    {
      id: 't-1',
      title: 'Tutorial 1',
      author: 'u-1'
    }
  ],
  comments: [
    {
      id: 'c-1',
      content: 'Comment 1',
      tutorial: 't-1',
      author: 'u-1'
    }
  ]
}

// Список всех пользователей
User.find()

// Один пользователь
User.findOne({ username: @user.username })

// Список всех туториалов автора с автором
Tutorial.find({ auhtor: @user.id }).append({ author: @user })

// Список всех комментов автора с автором и статьей
Comment.find({ auhtor: @user.id }).populate('tutorial').append({ author: @user })



// Список всех туториалов с автором
Tutorial.find().populate('author')

// Один туториал с автором
Tutorial.findOne({ id: @tutorial.id }).populate('author')

// Список комментов к туториалу с авторами и туториалами
Comment.find({ tutorial: @tutorial.id }).populate('author').append({ tutorial: @tutorial })



// Список всех комментов с авторами и туториалами
Comment.find().populate('author').populate('tutorial')


// Model.find().then()
// Model.find().catch()

const User = ORM.model('user', schema)  // create model
const User = ORM.model('user')          // get model

function createModel () {
  return new Model(...arguments)
}

class Model {
  constructor () {
    this.query = {}
  }

  find (where) {
    Object.assign(this.query, {where})
  }

  limit (limit) {
   Object.assign(this.query, {limit}) 
  }

  populate (populate) {
   Object.assign(this.query, {populate})
  }

  exec () {
    return Promise.resolve(this.query)
  }

  then () {
    // exec query
    return new Promise(this.exec.bind(this))
  }

  catch () {
    // exec query
    return new Promise(this.exec.bind(this))
  }
}















  
  



