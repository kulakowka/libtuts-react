# Пользователь

/users

/users/:username

/users/:username/profile
/users/:username/profile/name
/users/:username/profile/about

/users/:username/tutorials
/users/:username/tutorials/:id
/users/:username/tutorials/:id/title
/users/:username/tutorials/:id/source
/users/:username/tutorials/:id/domain
/users/:username/tutorials/:id/author
/users/:username/tutorials/:id/createdAt
/users/:username/tutorials/:id/updatedAt
/users/:username/tutorials/:id/commentsCount

/users/:username/comments
/users/:username/comments/:id
/users/:username/comments/:id/content
/users/:username/comments/:id/author
/users/:username/comments/:id/createdAt

# Туториал
/tutorials
/tutorials/:id
/tutorials/:id/data
/tutorials/:id/data/title
/tutorials/:id/data/content
/tutorials/:id/comments
/tutorials/:id/comments/:id
/tutorials/:id/comments/:id/content
/tutorials/:id/comments/:id/author
/tutorials/:id/projects
/tutorials/:id/projects/:id
/tutorials/:id/projects/:id/name
/tutorials/:id/projects/:id/tutorialsCount
/tutorials/:id/languages
/tutorials/:id/languages/:id
/tutorials/:id/languages/:id/name
/tutorials/:id/languages/:id/tutorialsCount
/tutorials/:id/languages/:id/projectsCount

# Язык программирования
/languages
/languages/:id
/languages/:id/info
/languages/:id/info/name
/languages/:id/info/meta
/languages/:id/info/meta/tutorialsCount
/languages/:id/info/meta/projectsCount
/languages/:id/tutorials
/languages/:id/tutorials/:id
/languages/:id/tutorials/:id/
/languages/:id/projects

# Главная страница
/mainpage/tutorials    
/mainpage/projects
/mainpage/languages

# Поиск
/search/tutorials
/search/projects

