
// получим индекс списка постов
var ids = DB.getIndex('posts')
//  [p1, p2, p3, p4]

// получим все посты с авторами
var posts = ids.map(id => {
  return DB.fetch({
    // posts/:id
    data: path.join('posts', id),
    // posts/:id/author
    author: path.join('posts', id, 'author')
  })
})

p1:
  posts/p1            <- найдет 'db/posts/1',
  posts/p1/author     <- найдет 'db/users/1',

p2:
  posts/p2            <- найдет 'db/posts/2',
  posts/p2/author     <- найдет 'db/users/2',

p3:
  posts/p3            <- найдет 'db/posts/3',
  posts/p3/author     <- найдет 'db/users/2',

p4:
  posts/p4            <- найдет 'db/posts/4',
  posts/p4/author     <- найдет 'db/users/2',

после того как мы получим итоговые пути,
некоторые будут повторяться,
мы будет делать только один запрос к базе,
для одного уникального пути,
так что если мы пытаемся получить 10 постов 
и их все написал один автор, 
то будет сделано всего 11 запросов:
- 1 запрос на получение автора по ID
- 10 запростов на получение поста по ID

конечно доставаться все это будет одним запросом 
типа

DB.get([
  'db/posts/1',
  'db/posts/2',
  'db/posts/3',
  'db/posts/4',
  'db/users/1',
  'db/users/2',
])

На самом деле - это будет несколько паралельных запросов по ключу :) 










var DB = {
  fetch(paths) {

  }
  get(key) {

  }
}

// теперь
paths: [
  1: ['posts/1/data', 'posts/1/author'],
  2: ['posts/2/data', 'posts/2/author'],
  3: ['posts/3/data', 'posts/3/author'],
]


