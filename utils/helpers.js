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

  keywordUrl (keyword) {
    return '/search?keyword=' + keyword
  },

  projectShieldUrl (id) {
    return baseUrl + '/shield/' + id + '.svg'
  },

  picUrl (id) {
    return baseUrl + '/images/pics/' + id + '.png'
  },

  userUrl (id) {
    return '/user/' + id
  },

  domainUrl (domain) {
    return '/domain/' + domain
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
    return '/' + page
  },

  /**
   * toArray: Return an array from object
   *
   * > toArray({node: true, js: true})
   * [{key: 'node', value: true}, {key: 'js', value: true}]
   */
  toArray (obj) {
    return Object.keys(obj).map((key) => {
      return {key, value: obj[key]}
    })
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
