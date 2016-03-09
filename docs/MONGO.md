{

  user: [
    { 
      _id: 'kulakowka', 
      name: 'Anton Kulakov'
    }
  ],

  authToken: [
    {
      _id: '8a9dna8sdbas87h9ba97dbad',
      user_id: 'kulakowka',
      attempts: 10
    }
  ],

  tutorials: [
    {
      _id: 'adj9a8shda9dh',
      title: 'Tutorial 1',
      source: 'http://google.com/p/1'
      domain: 'google.com',
      content: {
        markdown: '# Hello world!',
        html: '<h1>Hello world!</h1>'
      },
      keywords: ['node', 'js', 'web'],
      languages: [
        {_id: 'javascript', name: 'JavaScript'},
        {_id: 'html', name: 'HTML'}
      ],
      projects: [
        {_id: 'react', name: 'React.js'},
        {_id: 'babel', name: 'Babel.io'}
      ],
      meta: {
        comments: 0,
        reads: 0
      },
      author: {
        _id: 'kulakowka',
        name: 'Anton Kulakov'
      }
    }
  ],

  comments: [
    {
      _id: 'ads8asd1231jhh31',
      content: {
        markdown: '## Hey comment',
        html: '<h2>Hey comment'
      },
      tutorial: {
        _id: 'adj9a8shda9dh',
        title: 'Tutorial 1'
      },
      author: {
        _id: 'kulakowka',
        name: 'Anton Kulakov'
      }

    }
  ]
}


