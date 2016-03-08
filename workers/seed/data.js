module.exports = {

  // ПОЛЬЗОВАТЕЛИ

  users_usernames_to_uids: {
    kulakowka: 'user_1', // '66c6a27e-211a-4630-b4b7-053a518d686c',
    admin: 'user_2', // '0d7b7a02-9f53-49fb-a101-69ec356addf8',
    johndoe: 'user_3', // '674e143a-2145-41cf-8316-d29efa2c5ba5',
    janedoe: 'user_$' // 'ef108f34-34da-409a-a1c8-97535f6f6ab8'
  },

  users: {
    user_1: {
      profile: {
        username: 'kulakowka',
        fullName: 'Anton Kulakov',
        homepage: 'http://kulakowka.com',
        about: 'Frontend developer',
        createdAt: new Date(1987, 2, 1, 23, 15).getTime(),
        updatedAt: new Date(2016, 2, 15, 13, 44).getTime()
      },
      tutorials: {
        tutorial_1: true,
        tutorial_2: true
      },
      comments: {
        comment_1: true,
        comment_2: true
      },
      projects: {
        project_1: true,
        project_2: true
      }
    },
    user_2: {
      profile: {
        username: 'admin',
        fullName: 'Administrator',
        homepage: 'https://libtuts.com',
        createdAt: new Date(2016, 3, 8, 0, 0).getTime(),
        updatedAt: new Date(2016, 3, 9, 1, 10).getTime()
      },
      tutorials: {
        tutorial_3: true,
        tutorial_4: true
      },
      comments: {
        comment_3: true,
        comment_4: true
      },
      projects: {
        project_3: true,
        project_4: true
      }
    },
    user_3: {
      profile: {
        username: 'johndoe',
        fullName: 'John Doe',
        createdAt: new Date(2010, 2, 1, 23, 15).getTime(),
        updatedAt: new Date(2012, 2, 15, 13, 44).getTime()
      }
    },
    user_4: {
      profile: {
        username: 'janedoe',
        fullName: 'Jane Doe',
        createdAt: new Date(2012, 2, 1, 23, 15).getTime(),
        updatedAt: new Date(2014, 2, 15, 13, 44).getTime()
      }
    }
  },

  // ТУТОРИАЛЫ

  tutorials: {
    tutorial_1: {
      data: {
        title: 'Tutorial 1',
        source: 'https://facebook.github.io/react/blog/2016/01/12/discontinuing-ie8-support.html',
        domain: 'facebook.github.io',
        keywords: ['react', 'reactjs'],
        createdAt: new Date(2015, 2, 1, 20, 8).getTime(),
        updatedAt: new Date(2015, 8, 25, 3, 12).getTime(),
        author: 'user_1'
      },
      content: {
        markdown: 'Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p><p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.',
        html: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p><p>Today, Microsoft discontinued support for older versions of IE. Starting with React v15, we\'re discontinuing React DOM\'s support for IE 8. We\'ve heard that most React DOM apps already don\'t support old versions of Internet Explorer, so this shouldn\'t affect many people. This change will help us develop faster and make React DOM even better. (We won\'t actively remove IE 8–related code quite yet, but we will deprioritize new bugs that are reported. If you need to support IE 8 we recommend you stay on React v0.14.)</p><p>React DOM will continue to support IE 9 and above for the foreseeable future.</p>'
      },
      comments: {
        comment_1: true,
        comment_2: true
      },
      languages: {
        language_1: true,
        language_2: true
      },
      projects: {
        project_1: true,
        project_4: true
      }
    },
    tutorial_2: {
      data: {
        title: 'Tutorial 2',
        keywords: ['node', 'javascript'],
        createdAt: new Date(2015, 3, 4, 10, 8).getTime(),
        updatedAt: new Date(2015, 9, 5, 23, 12).getTime(),
        author: 'user_1'
      },
      content: {
        markdown: 'Firebase can power your app\'s backend, including data storage, user authentication, static hosting, and more. Focus on creating extraordinary user experiences. We\'ll take care of the rest.',
        html: '<p>Firebase can power your app\'s backend, including data storage, user authentication, static hosting, and more. Focus on creating extraordinary user experiences. We\'ll take care of the rest.</p>'
      },
      comments: {
        comment_3: true,
        comment_4: true
      },
      languages: {
        language_1: true,
        language_3: true,
        language_4: true
      },
      projects: {
        project_1: true,
        project_3: true,
        project_4: true
      }
    },
    tutorial_3: {
      data: {
        title: 'Tutorial 3',
        source: 'https://medium.com/@reinelmp/batching-redux-actions-a68daaa2d492',
        domain: 'medium.com',
        keywords: ['php', 'ruby', 'node'],
        createdAt: new Date(2015, 3, 1, 10, 8).getTime(),
        updatedAt: new Date(2015, 9, 2, 23, 12).getTime(),
        author: 'user_2'
      },
      languages: {
        language_2: true,
        language_3: true
      },
      projects: {
        project_2: true,
        project_4: true
      }
    },
    tutorial_4: {
      data: {
        title: 'Tutorial 4',
        keywords: ['java', 'ios', 'mobile'],
        createdAt: new Date(2015, 12, 1, 11, 8).getTime(),
        updatedAt: new Date(2015, 12, 2, 20, 12).getTime(),
        author: 'user_2'
      },
      content: {
        markdown: 'Store & sync data with our NoSQL cloud database. Data is stored as JSON, synced to all connected clients in realtime, and available when your app goes offline.\n\nAuthenticate users with email & password, Facebook, Twitter, GitHub, Google, anonymous auth, or easily integrate with your existing authentication system.\n\nDeploy your web app in seconds with our production-grade static asset hosting. From acquiring the SSL cert to serving your content on our global CDN, we do it all for you.',
        html: '<p>Store & sync data with our NoSQL cloud database. Data is stored as JSON, synced to all connected clients in realtime, and available when your app goes offline.</p><p>Authenticate users with email & password, Facebook, Twitter, GitHub, Google, anonymous auth, or easily integrate with your existing authentication system.</p><p>Deploy your web app in seconds with our production-grade static asset hosting. From acquiring the SSL cert to serving your content on our global CDN, we do it all for you.</p>'
      },
      languages: {
        language_2: true,
        language_3: true
      },
      projects: {
        project_2: true,
        project_4: true
      }
    }
  },

  // КОММЕНТАРИИ

  comments: {
    comment_1: {
      data: {
        author: 'user_1',
        tutorial: 'tutorial_1',
        createdAt: new Date(2015, 12, 1, 11, 8).getTime(),
        updatedAt: new Date(2015, 12, 2, 20, 12).getTime()
      },
      content: {
        markdown: 'Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.',
        html: '<p>Since its 2013 release, React has supported all popular browsers, including Internet Explorer 8 and above. We handle normalizing many quirks present in old browser versions, including event system differences, so that your app code doesn\'t have to worry about most browser bugs.</p>',
      }
    },
    comment_2: {
      data: {
        author: 'user_1',
        tutorial: 'tutorial_1',
        createdAt: new Date(2015, 12, 1, 11, 28).getTime(),
        updatedAt: new Date(2015, 12, 2, 20, 32).getTime()
      },
      content: {
        markdown: 'With Firebase, you can store data and authenticate users in your app with just a few lines of code.',
        html: '<p>With Firebase, you can store data and authenticate users in your app with just a few lines of code.</p>'
      }
    },
    comment_3: {
      data: {
        author: 'user_2',
        tutorial: 'tutorial_2',
        createdAt: new Date(2015, 12, 2, 1, 8).getTime(),
        updatedAt: new Date(2015, 12, 3, 2, 2).getTime()
      },
      content: {
        markdown: 'Your Firebase app will remain responsive regardless of network latency or Internet connectivity. All writes to a Firebase database will trigger local events immediately, before any data has been written to the server. Once connectivity is re-established, the client will receive any changes it missed, synchronizing it with the current server state.',
        html: '<p>Your Firebase app will remain responsive regardless of network latency or Internet connectivity. All writes to a Firebase database will trigger local events immediately, before any data has been written to the server. Once connectivity is re-established, the client will receive any changes it missed, synchronizing it with the current server state.</p>'
      }
    },
    comment_4: {
      data: {
        author: 'user_2',
        tutorial: 'tutorial_2',
        createdAt: new Date(2016, 1, 4, 1, 8).getTime(),
        updatedAt: new Date(2016, 1, 4, 1, 8).getTime()
      },
      content: {
        markdown: 'Your Firebase app will remain responsive regardless of network latency or Internet connectivity. All writes to a Firebase database will trigger local events immediately, before any data has been written to the server. Once connectivity is re-established, the client will receive any changes it missed, synchronizing it with the current server state.',
        html: '<p>Your Firebase app will remain responsive regardless of network latency or Internet connectivity. All writes to a Firebase database will trigger local events immediately, before any data has been written to the server. Once connectivity is re-established, the client will receive any changes it missed, synchronizing it with the current server state.</p>'
      }
    }
  },

  // ЯЗЫКИ ПРОГРАММИРОВАНИЯ

  languages_slugs_to_ids: {
    javascript: 'language_1',
    ruby: 'language_2',
    go: 'language_3',
    php: 'language_4'
  },

  languages: {
    language_1: {
      data: {
        name: 'JavaScript',
        slug: 'javascript'
      },
      projects: {
        project_1: true,
        project_2: true
      },
      tutorials: {
        tutorial_1: true,
        tutorial_2: true
      }
    },
    language_2: {
      data: {
        name: 'Ruby',
        slug: 'ruby'
      },
      projects: {
        project_3: true,
        project_4: true
      },
      tutorials: {
        tutorial_1: true,
        tutorial_3: true,
        tutorial_4: true
      }
    },
    language_3: {
      data: {
        name: 'Go',
        slug: 'go'
      },
      projects: {
        project_1: true,
        project_2: true
      },
      tutorials: {
        tutorial_2: true,
        tutorial_3: true,
        tutorial_4: true
      }
    },
    language_4: {
      data: {
        name: 'PHP',
        slug: 'php'
      },
      projects: {
        project_3: true,
        project_4: true
      },
      tutorials: {
        tutorial_2: true
      }
    }
  },

  // ПРОЕКТЫ

  projects_slugs_to_ids: {
    react: 'project_1',
    babel: 'project_2',
    mocha: 'project_3',
    socketio: 'project_4'
  },

  projects: {
    project_1: {
      data: {
        name: 'React.js',
        slug: 'react',
        description: 'UI library',
        homepage: 'https://facebook.github.io/react/',
        repository: 'https://github.com/facebook/react',
        keywords: ['react', 'ui', 'dom', 'view', 'html'],
        author: 'user_1',
        createdAt: new Date(2010, 3, 14, 11, 38).getTime(),
        updatedAt: new Date(2010, 3, 14, 11, 38).getTime()
      },
      tutorials: {
        tutorial_1: true,
        tutorial_2: true
      },
      languages: {
        language_1: true,
        language_3: true
      }
    },
    project_2: {
      data: {
        name: 'Babel.js',
        slug: 'bable',
        description: 'Compiler for ES6 to ES5 javascript code',
        homepage: 'https://babeljs.io',
        repository: 'https://github.com/babel/babel',
        keywords: ['js', 'javascript', 'es6', 'es5', 'compilation'],
        author: 'user_1',
        createdAt: new Date(2011, 3, 14, 11, 38).getTime(),
        updatedAt: new Date(2011, 3, 14, 11, 38).getTime()
      },
      tutorials: {
        tutorial_3: true,
        tutorial_4: true
      },
      languages: {
        language_1: true,
        language_3: true
      }
    },
    project_3: {
      data: {
        name: 'Mocha',
        slug: 'mocha',
        description: 'Is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing simple and fun.',
        homepage: 'http://mochajs.org',
        repository: 'https://github.com/mochajs/mocha',
        keywords: ['js', 'javascript', 'test', 'tests', 'nodejs'],
        author: 'user_2',
        createdAt: new Date(2013, 3, 4, 1, 3).getTime(),
        updatedAt: new Date(2013, 4, 10, 10, 8).getTime()
      },
      tutorials: {
        tutorial_2: true
      },
      languages: {
        language_2: true,
        language_4: true
      }
    },
    project_4: {
      data: {
        name: 'Socket.io',
        slug: 'socketio',
        description: 'Realtime application framework (Node.JS server)',
        homepage: 'http://socket.io',
        repository: 'https://github.com/socketio/socket.io/',
        keywords: ['js', 'javascript', 'socket', 'websocket', 'ws'],
        author: 'user_2',
        createdAt: new Date(2014, 3, 4, 1, 3).getTime(),
        updatedAt: new Date(2014, 4, 10, 10, 8).getTime()
      },
      tutorials: {
        tutorial_1: true,
        tutorial_2: true,
        tutorial_3: true,
        tutorial_4: true
      },
      languages: {
        language_2: true,
        language_4: true
      }
    }
  },

  // ИНФО СТРАНИЦЫ

  pages: {
    terms: '<h1>LibTuts Terms of Service</h1><p>text</p>',
    privacy: '<h1>LibTuts Privacy Policy</h1><p>text</p>',
    security: '<h1>LibTuts Security</h1><p>text</p>',
    help: '<h1>LibTuts Help</h1><p>text</p>',
    about: '<h1>About LibTuts</h1><p>text</p>',
    contact: '<h1>Contact LibTuts</h1><p>text</p>'
  }

}
