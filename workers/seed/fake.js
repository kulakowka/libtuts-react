'use strict'

var debug = require('debug')('app:seed')
var faker = require('faker')
var marked = require('marked')
var _ = require('lodash')

class Seeder {
  constructor (options) {
    Object.assign(this, options, {
      data: {},
      collections: {
        users: [],
        tutorials: [],
        comments: [],
        languages: [],
        projects: []
      }
    })
  }

  getFakeUser (uid) {
    return {
      uid,
      username: faker.internet.userName().toLowerCase().replace(/\W/g, '-'),
      fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeLanguage (id) {
    let name = faker.hacker.noun()

    return {
      id,
      name,
      slug: name.toLowerCase().replace(/\W/g, '-')
    }
  }

  getFakeProject (id, author) {
    let name = faker.hacker.verb()

    return {
      id,
      name,
      slug: name.toLowerCase().replace(/\W/g, '-'),
      description: faker.lorem.paragraph(),
      homepage: faker.internet.url(),
      repository: faker.internet.url(),
      keywords: faker.lorem.words(),
      author,
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeTutorial (id, author) {
    return {
      id,
      title: faker.name.title(),
      source: faker.internet.url(),
      domain: faker.internet.domainName(),
      keywords: faker.lorem.words(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime(),
      author
    }
  }

  getFakeComment (id, author, tutorial) {
    return {
      id,
      tutorial,
      author,
      content: this.getFakeTutorialContent(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeTutorialContent () {
    let text = faker.lorem.paragraphs()
    return {
      markdown: text,
      html: marked(text)
    }
  }

  getFakeTutorialLanguages (count) {
    let languages = _.sampleSize(this.collections.languages, _.random(0, 3))

    let data = {}

    languages.forEach((language) => {
      data[language.id] = true
    })

    return data
  }

  getFakeTutorialProjects (count) {
    let projects = _.sampleSize(this.collections.projects, _.random(0, 3))

    let data = {}

    projects.forEach((project) => {
      data[project.id] = true
    })

    return data
  }

  // public methods

  createFakeUsers (count) {
    for (let i = 0; i < count; i++) {
      let uid = faker.random.uuid()
      let user = this.getFakeUser(uid)

      this.collections.users.push(user)

      this.data['users/' + uid + '/data'] = user
      this.data['users_usernames_to_uids/' + user.username] = uid
    }
    return this
  }

  createFakeLanguages (count) {
    for (let i = 0; i < count; i++) {
      let id = faker.random.uuid()
      let language = this.getFakeLanguage(id)

      this.collections.languages.push(language)

      this.data['languages/' + id + '/data'] = language
      this.data['languages_slugs_to_ids/' + language.slug] = id
    }
    return this
  }

  createFakeProjects (count) {
    for (let i = 0; i < count; i++) {
      let id = faker.random.uuid()
      let uid = _.sample(this.collections.users).uid
      let project = this.getFakeProject(id, uid)
      let projectLanguages = this.getFakeTutorialLanguages(_.random(0, 5))

      this.collections.projects.push(project)

      this.data['projects/' + id + '/data'] = project
      this.data['projects_slugs_to_ids/' + project.slug] = id

      Object.keys(projectLanguages).map((languageId) => {
        this.data['projects/' + id + '/languages/' + languageId] = true
      })

      this.data['users/' + uid + '/projects/' + id] = true
    }
    return this
  }

  createFakeTutorials (count) {
    for (let i = 0; i < count; i++) {
      let author = _.sample(this.collections.users)
      let tutorialId = faker.random.uuid()
      let tutorial = this.getFakeTutorial(tutorialId, author)
      let tutorialContent = this.getFakeTutorialContent()
      let tutorialLanguages = this.getFakeTutorialLanguages(_.random(0, 5))
      let tutorialProjects = this.getFakeTutorialProjects(_.random(0, 5))

      this.collections.tutorials.push(tutorial)

      this.data['tutorials/' + tutorialId + '/data'] = tutorial
      this.data['tutorials/' + tutorialId + '/content'] = tutorialContent
      this.data['tutorials/' + tutorialId + '/languages'] = tutorialLanguages
      this.data['tutorials/' + tutorialId + '/projects'] = tutorialProjects
      this.data['users/' + author.uid + '/tutorials/' + tutorialId + '/projects'] = true

      Object.keys(tutorialLanguages).map((languageId) => {
        this.data['languages/' + languageId + '/tutorials/' + tutorialId] = true
      })

      Object.keys(tutorialProjects).map((projectId) => {
        this.data['projects/' + projectId + '/tutorials/' + tutorialId] = true
      })
    }
    return this
  }

  createFakeComments (count) {
    for (let i = 0; i < count; i++) {
      let tutorialId = _.sample(this.collections.tutorials).id
      let uid = _.sample(this.collections.users).uid
      let id = faker.random.uuid()
      let comment = this.getFakeComment(id, uid, tutorialId)

      this.collections.comments.push(comment)

      this.data['comments/' + id + '/data'] = comment
      this.data['users/' + uid + '/comments/' + id] = true
      this.data['tutorials/' + tutorialId + '/comments/' + id] = true
    }
    return this
  }

  createInfoPages () {
    this.data['pages'] = {
      terms: '<h1>LibTuts Terms of Service</h1><p>text</p>',
      privacy: '<h1>LibTuts Privacy Policy</h1><p>text</p>',
      security: '<h1>LibTuts Security</h1><p>text</p>',
      help: '<h1>LibTuts Help</h1><p>text</p>',
      about: '<h1>About LibTuts</h1><p>text</p>',
      contact: '<h1>Contact LibTuts</h1><p>text</p>'
    }
    return this
  }

  start () {
    // console.log('ref.set ', this.data)
    return this.ref.set({}).then(() => this.ref.update(this.data))
  }

}

module.exports = Seeder
