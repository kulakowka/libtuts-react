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

  getFakeUser () {
    let fullName = faker.name.firstName() + ' ' + faker.name.lastName()
    let username = fullName.toLowerCase().replace(/\W/g, '-')

    if (_.findIndex(this.collections.users, {username}) !== -1) {
      return this.getFakeUser()
    }

    return {
      username,
      fullName,
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeLanguage () {
    let name = faker.hacker.abbreviation()
    let slug = name.toLowerCase().replace(/\W/g, '-')

    if (_.findIndex(this.collections.languages, {slug}) !== -1) {
      return this.getFakeLanguage()
    }

    return {name, slug}
  }

  getFakeProject (author) {
    let name = faker.commerce.product()
    let slug = name.toLowerCase().replace(/\W/g, '-')

    if (_.findIndex(this.collections.projects, {slug}) !== -1) {
      return this.getFakeProject(author)
    }

    let languages = _.sampleSize(this.collections.languages, _.random(0, 5))

    languages = languages.reduce((obj, item) => {
      obj[item.slug] = item
      return obj
    }, {})

    return {
      name,
      slug,
      author,
      languages,
      description: faker.lorem.paragraph(),
      homepage: faker.internet.url(),
      repository: faker.internet.url(),
      keywords: faker.lorem.words(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeTutorial (author) {
    let id = faker.random.uuid()

    return {
      id,
      title: faker.hacker.phrase(),
      source: faker.internet.url(),
      domain: faker.internet.domainName(),
      keywords: faker.lorem.words(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime(),
      author
    }
  }

  getFakeComment (author, tutorial) {
    let id = faker.random.uuid()

    return {
      id,
      tutorial,
      author,
      content: this.getFakeContent(),
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeContent () {
    let text = faker.lorem.paragraphs()
    return {
      markdown: text,
      html: marked(text)
    }
  }

  getFakeLanguages (count) {
    let languages = _.sampleSize(this.collections.languages, _.random(0, 3))
    let data = {}
    languages.forEach((language) => {
      data[language.slug] = _.pick(language, ['slug', 'name'])
    })
    return data
  }

  getFakeProjects (count) {
    let projects = _.sampleSize(this.collections.projects, _.random(0, 3))
    let data = {}
    projects.forEach((project) => {
      data[project.slug] = _.pick(project, ['slug', 'name'])
    })

    return data
  }

  // public methods

  createFakeUsers (count) {
    for (let i = 0; i < count; i++) {
      let user = this.getFakeUser()

      this.collections.users.push(user)

      this.data['users/' + user.username] = user
    }
    return this
  }

  createFakeLanguages (count) {
    for (let i = 0; i < count; i++) {
      let language = this.getFakeLanguage()

      this.collections.languages.push(language)

      this.data['languages/' + language.slug] = language
    }
    return this
  }

  createFakeProjects (count) {
    for (let i = 0; i < count; i++) {
      let user = _.sample(this.collections.users)
      let author = _.pick(user, ['username', 'fullName'])
      let project = this.getFakeProject(author)
      let projectShort = _.pick(project, ['slug', 'name'])

      this.collections.projects.push(project)

      this.data['projects/' + project.slug] = project

      this.data['user_projects/' + author.username + '/' + project.slug] = projectShort

      Object.keys(project.languages).map((languageId) => {
        this.data['language_projects/' + languageId + '/' + project.slug] = projectShort
      })
    }
    return this
  }

  createFakeTutorials (count) {
    for (let i = 0; i < count; i++) {
      let user = _.sample(this.collections.users)
      let author = _.pick(user, ['username', 'fullName'])
      let tutorial = this.getFakeTutorial(author)
      let content = this.getFakeContent()
      let languages = this.getFakeLanguages(_.random(0, 5))
      let projects = this.getFakeProjects(_.random(0, 5))

      this.collections.tutorials.push(tutorial)

      this.data['tutorials/' + tutorial.id] = tutorial
      this.data['tutorial_content/' + tutorial.id] = content
      this.data['tutorial_languages/' + tutorial.id] = languages
      this.data['tutorial_projects/' + tutorial.id] = projects

      this.data['user_tutorials/' + author.username + '/' + tutorial.id] = tutorial

      Object.keys(languages).map((languageId) => {
        this.data['language_tutorials/' + languageId + '/' + tutorial.id] = tutorial
      })

      Object.keys(projects).map((projectId) => {
        this.data['project_tutorials/' + projectId + '/' + tutorial.id] = tutorial
      })
    }
    return this
  }

  createFakeComments (count) {
    for (let i = 0; i < count; i++) {
      let user = _.sample(this.collections.users)
      let author = _.pick(user, ['username', 'fullName'])
      let tutorial = _.sample(this.collections.tutorials)
      let comment = this.getFakeComment(author, tutorial.id)

      this.collections.comments.push(comment)

      this.data['comments/' + comment.id] = comment
      this.data['user_comments/' + author.username + '/' + comment.id] = comment
      this.data['tutorial_comments/' + tutorial.id + '/' + comment.id] = comment
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
