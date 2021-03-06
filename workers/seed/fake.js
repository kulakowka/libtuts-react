'use strict'

var debug = require('debug')('app:seed')
var faker = require('faker')
var marked = require('marked')
var _ = require('lodash')
var languages = require('./data')

class Seeder {
  constructor (options) {
    Object.assign(this, options, {
      data: {},
      collections: {
        users: {},
        tutorials: {},
        comments: {},
        languages: {},
        projects: {}
      }
    })
  }

  getFakeUser () {
    let fullName = faker.name.firstName() + ' ' + faker.name.lastName()
    let username = fullName.toLowerCase().replace(/\W/g, '-')
    let about = faker.lorem.paragraph()
    let homepage = faker.internet.url()

    if (this.collections.users[username]) {
      return this.getFakeUser()
    }

    return {
      username,
      fullName,
      about,
      homepage,
      createdAt: faker.date.past().getTime(),
      updatedAt: faker.date.past().getTime()
    }
  }

  getFakeProject (author) {
    let name = faker.name.firstName() + ' ' + faker.commerce.product()
    let slug = name.toLowerCase().replace(/\W/g, '-')

    if (this.collections.projects[slug]) {
      return this.getFakeProject(author)
    }

    let languages = _.sampleSize(_.toArray(this.collections.languages), _.random(0, 15))

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

  getLanguages (count) {
    let languages = _.sampleSize(_.toArray(this.collections.languages), _.random(0, 15))
    let data = {}
    languages.forEach((language) => {
      data[language.slug] = _.pick(language, ['slug', 'name'])
    })
    return data
  }

  getFakeProjects (count) {
    let projects = _.sampleSize(_.toArray(this.collections.projects), _.random(0, 15))
    let data = {}
    projects.forEach((project) => {
      data[project.slug] = _.pick(project, ['slug', 'name'])
    })

    return data
  }

  // public methods

  createFakeUsers (count) {
    return (done) => {
      for (let i = 0; i < count; i++) {
        let user = this.getFakeUser()

        this.collections.users[user.username] = user

        this.data['users/' + user.username] = user
      }
      done()
    }
  }

  createRealLanguages () {
    return (done) => {
      Object.keys(languages).forEach((slug) => {
        let language = Object.assign({}, languages[slug], {slug})

        this.collections.languages[slug] = language
        this.data['languages/' + slug] = language
      })
      done()
    }
  }

  createFakeProjects (count) {
    return (done) => {
      for (let i = 0; i < count; i++) {
        let user = _.sample(_.toArray(this.collections.users))
        let author = _.pick(user, ['username', 'fullName'])
        let project = this.getFakeProject(author)
        let projectShort = _.pick(project, ['slug', 'name'])

        this.collections.projects[project.slug] = project

        this.data['projects/' + project.slug] = project

        this.data['user_projects/' + author.username + '/' + project.slug] = projectShort

        Object.keys(project.languages).map((languageId) => {
          this.data['language_projects/' + languageId + '/' + project.slug] = projectShort
        })
      }
      done()
    }
  }

  createFakeTutorials (count) {
    return (done) => {
      for (let i = 0; i < count; i++) {
        let user = _.sample(_.toArray(this.collections.users))
        let author = _.pick(user, ['username', 'fullName'])
        let tutorial = this.getFakeTutorial(author)
        let content = this.getFakeContent()
        let languages = this.getLanguages(_.random(0, 15))
        let projects = this.getFakeProjects(_.random(0, 15))

        this.collections.tutorials[tutorial.id] = tutorial

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
      done()
    }
  }

  createFakeComments (count) {
    return (done) => {
      for (let i = 0; i < count; i++) {
        let user = _.sample(_.toArray(this.collections.users))
        let author = _.pick(user, ['username', 'fullName'])
        let tutorial = _.sample(_.toArray(this.collections.tutorials))
        let comment = this.getFakeComment(author, tutorial.id)

        this.collections.comments[comment.id] = comment

        this.data['comments/' + comment.id] = comment
        this.data['user_comments/' + author.username + '/' + comment.id] = comment
        this.data['tutorial_comments/' + tutorial.id + '/' + comment.id] = comment
      }
      done()
    }
  }

  createInfoPages () {
    return (done) => {
      this.data['pages'] = {
        terms: '<h1>LibTuts Terms of Service</h1><p>text</p>',
        privacy: '<h1>LibTuts Privacy Policy</h1><p>text</p>',
        security: '<h1>LibTuts Security</h1><p>text</p>',
        help: '<h1>LibTuts Help</h1><p>text</p>',
        about: '<h1>About LibTuts</h1><p>text</p>',
        contact: '<h1>Contact LibTuts</h1><p>text</p>'
      }
      done()
    }
  }

  start () {
    // console.log('ref.set ', this.data)
    return this.ref.set({}).then(() => this.ref.update(this.data))
  }

}

module.exports = Seeder
