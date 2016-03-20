const baseUrl = process.env.BASE_URL

const helpers = {
  tutorialsUrl () {
    return '/tutorials'
  },

  tutorialUrl (id) {
    return '/tutorial/' + id
  },

  tutorialCommentsUrl (id) {
    return {pathname: '/tutorial/' + id, hash: '#comments'}
  },

  addTutorialUrl () {
    return '/tutorials/new'
  },

  addProjectUrl () {
    return '/projects/new'
  },

  addLanguageUrl () {
    return '/languages/new'
  },

  tutorialEditUrl (id) {
    return '/tutorial/' + id + '/edit'
  },

  languagesUrl () {
    return '/languages'
  },

  languageUrl (id) {
    return '/language/' + id
  },

  projectsUrl () {
    return '/projects'
  },

  projectUrl (id) {
    return '/project/' + id
  },

  projectShieldUrl (id) {
    return baseUrl + '/shield/' + id + '.svg'
  },

  picUrl (id) {
    return '/img/pics/' + id + '.png'
  },

  userUrl (id) {
    return '/user/' + id
  },

  keywordUrl (keyword) {
    return '/search/tutorials?q=' + keyword
  },

  domainUrl (domain) {
    return '/search/tutorials?domain=' + domain
  },

  commentUrl (tutorialId, id) {
    return {pathname: '/tutorial/' + tutorialId, hash: '#' + id}
  },

  settingsUrl () {
    return '/settings'
  },

  resetPasswordUrl () {
    return '/auth/reset_password'
  },

  signInUrl () {
    return '/auth/signin'
  },

  signUpUrl () {
    return '/auth/signup'
  },

  infoPageUrl (page) {
    return '/info/' + page
  },

  toArray (obj) {
    return obj ? Object.keys(obj).map((key) => obj[key]) : []
  },

  addKey (obj) {
    return Object.keys(obj).map((key) => {
      obj[key]['.key'] = key
      return obj[key]
    })
  },

  toObject (arr) {
    return arr.reduce((result, item) => {
      result[item] = true
      return result
    }, {})
  },

  /**
   * > tagsByCommas(keywords, (keyword, i) => <a href={'/search?keywords=' + keyword} key={i}>{keyword}</a>)}
   */
  tagsByCommas (data, iterator) {
    const tags = (data || []).map(iterator)
    return helpers.intersperse(tags, ', ')
  },

  /* intersperse: Return an array with the separator interspersed between
   * each element of the input array.
   *
   * > _([1,2,3]).intersperse(0)
   * [1,0,2,0,3]
   */
  intersperse (arr, sep) {
    if (arr.length === 0) return []
    return arr.slice(1).reduce((xs, x) => xs.concat([sep, x]), [arr[0]])
  }
}

export default helpers
