module.exports = {

  // ИНФО СТРАНИЦЫ

  Pages: {
    terms: '<h1>LibTuts Terms of Service</h1><p>text</p>',
    privacy: '<h1>LibTuts Privacy Policy</h1><p>text</p>',
    security: '<h1>LibTuts Security</h1><p>text</p>',
    help: '<h1>LibTuts Help</h1><p>text</p>',
    about: '<h1>About LibTuts</h1><p>text</p>',
    contact: '<h1>Contact LibTuts</h1><p>text</p>'
  },

  // ЯЗЫКИ ПРОГРАММИРОВАНИЯ

  Languages: {
    javascript: {
      name: 'JavaScript'
    },
    ruby: {
      name: 'Ruby'
    }
  },

  // ПРОЕКТЫ

  Projects: {
    react: {
      name: 'React.js',
      description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
      homepage: 'https://facebook.github.io/react/',
      repository: 'https://github.com/facebook/react',
      keywords: ['react', 'ui', 'javascript'],
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      }
    },
    babel: {
      name: 'Babel.js',
      description: 'Babel is a compiler for writing next generation JavaScript.',
      homepage: 'https://babeljs.io/',
      repository: 'https://github.com/babel/babel',
      keywords: ['babel', 'compiler', 'javascript'],
      languages: {
        javascript: 'JavaScript'
      }
    }
  },

  // ТУТОРИАЛЫ

  Tutorials: {
    t0000001: {
      title: 'Tutorial 1 with source url',
      source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
      domain: 'facebook.github.io',
      keywords: ['react', 'reactjs'],
      languages: {
        javascript: 'JavaScript',
        ruby: 'Ruby'
      },
      projects: {
        react: 'React.js',
        babel: 'Babel.js'
      },
      author: 'kulakowka',
      createdAt: 1457210853551,
      updatedAt: 1457210863551
    },
    t0000002: {
      title: 'Tutorial 2 without source url',
      contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p><p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
      keywords: ['react', 'reactjs', 'javascript', 'ruby'],
      languages: {
        ruby: 'Ruby'
      },
      projects: {
        babel: 'Babel.js'
      },
      author: 'kulakowka',
      createdAt: 1453210853551,
      updatedAt: 1457210863551
    }
  },

  // КОММЕНТАРИИ
  // списка всех комметов у нас не будет, так что и нет смысла держать коллекцию всех комментов отдельно?
  // Comments: {
  //   c00001: {
  //     contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p>',
  //     tutorial: 't0000001',
  //     author: 'kulakowka'
  //   },
  //   c00002: {
  //     contentHtml: '<p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
  //     tutorial: 't0000001',
  //     author: 'kulakowka'
  //   },
  //   c00003: {
  //     contentHtml: '<p>I wanted to share my personal opinion about what happened at the conference (without disclosing the names or content of any private conversations).</p>',
  //     tutorial: 't0000002',
  //     author: 'kulakowka'
  //   }
  // },

  // ПОЛЬЗОВАТЕЛИ

  Users: {
    kulakowka: {
      name: 'Anton Kulakov',
      homepage: 'http://kulakowka.com',
      about: 'Frontend developer'
    }
  },

  // ИНДЕКСЫ

  _language_projects: {
    javascript: {
      react: {
        name: 'React.js'
      },
      babel: {
        name: 'Babel.js'
      }
    },
    ruby: {
      react: {
        name: 'React.js'
      }
    }
  },

  _language_tutorials: {
    javascript: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      }
    },
    ruby: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      },
      t0000002: {
        title: 'Tutorial 2 without source url',
        author: 'kulakowka',
        createdAt: 1453210853551,
        updatedAt: 1457210863551
      }
    }
  },

  _project_tutorials: {
    react: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      }
    },
    babel: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      },
      t0000002: {
        title: 'Tutorial 2 without source url',
        author: 'kulakowka',
        createdAt: 1453210853551,
        updatedAt: 1457210863551
      }
    }
  },

  _tutorial_comments: {
    t0000001: {
      c00001: {
        contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p>',
        tutorial: 't0000001',
        author: 'kulakowka'
      },
      c00002: {
        contentHtml: '<p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
        tutorial: 't0000001',
        author: 'kulakowka'
      }
    },
    t0000002: {
      c00003: {
        contentHtml: '<p>I wanted to share my personal opinion about what happened at the conference (without disclosing the names or content of any private conversations).</p>',
        tutorial: 't0000002',
        author: 'kulakowka'
      }
    }
  },

  _user_comments: {
    kulakowka: {
      c00001: {
        contentHtml: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p>',
        tutorial: 't0000001',
        author: 'kulakowka'
      },
      c00002: {
        contentHtml: '<p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>',
        tutorial: 't0000001',
        author: 'kulakowka'
      },
      c00003: {
        contentHtml: '<p>I wanted to share my personal opinion about what happened at the conference (without disclosing the names or content of any private conversations).</p>',
        tutorial: 't0000002',
        author: 'kulakowka'
      }
    }
  },

  _user_tutorials: {
    kulakowka: {
      t0000001: {
        title: 'Tutorial 1 with source url',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        author: 'kulakowka',
        createdAt: 1457210853551,
        updatedAt: 1457210863551
      },
      t0000002: {
        title: 'Tutorial 2 without source url',
        author: 'kulakowka',
        createdAt: 1453210853551,
        updatedAt: 1457210863551
      }
    }
  }
}
