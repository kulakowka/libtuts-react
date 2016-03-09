var DB_Index = {
  // Post 1
  'posts/p1': 'db/posts/1',
  
  // Post 2
  'posts/p2': 'db/posts/2',

  // Post 3
  'posts/p3': 'db/posts/3',

  // User 1
  'users/u1': 'db/users/1',
  'posts/p1/author': 'db/users/1',

  // User 2
  'users/u2': 'db/users/2',
  'posts/p2/author': 'db/users/2',
  'posts/p3/author': 'db/users/2',
  'posts/p4/author': 'db/users/2',
}

var db = {
  posts: {
    1: {
      title: 'Post 1'
    },
    2: {
      title: 'Post 2'
    }
  },
  users: {
    1: {
      name: 'User 1'
    },
    2: {
      name: 'User 2'
    }
  }

}