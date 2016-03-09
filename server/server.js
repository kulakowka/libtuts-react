import Express from 'express'
import bodyParser from 'body-parser'
import path from 'path'

// Webpack Requirements
import webpack from 'webpack'
import config from '../webpack.config.dev'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

// Initialize the Express App
const app = new Express()

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(config)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))
}

// React Setup
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'

// Import required modules
import routes from '../shared/routes'
import serverConfig from './config'

// Apply body Parser and server public assets and routes
app.use(bodyParser.json({ limit: '20mb' }))
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }))
app.use(Express.static(path.resolve(__dirname, '../static')))

// Render Initial HTML
const renderFullPage = (html, initialState) => {
  const css = process.env.NODE_ENV === 'production' ? '<link rel="stylesheet" href="/dist/app.min.css" />' : ''
  const js = process.env.NODE_ENV === 'production' ? '<script src="/dist/bundle.min.js"></script>' : '<script src="/dist/bundle.js"></script>'

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>LibTuts</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,400italic,700,700italic,300,100,100italic,300italic,500,500italic,900,900italic&subset=latin,cyrillic"/>
        ${css}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        ${js}
      </body>
    </html>
  `
}

app.get('/img/pics/*', (req, res, next) => {
  var options = {
    root: path.resolve(__dirname, '../static'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = 'img/pics/__default.png'
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err)
      res.status(err.status).end()
    } else {
      console.log('Sent:', fileName)
    }
  })
})

const numeral = require('numeral')
app.get('/shield/:id.svg', (req, res, next) => {
  res.set({
    'Cache-Control': 'public, max-age=3600',
    'Content-Type': 'image/svg+xml'
  })

  let data = getShield(100500)
  res.send(data)
})

function getShield (count) {
  const countText = numeral(count).format('0a')
  const countLength = countText.length

  if (countLength < 2) return `<svg xmlns="http://www.w3.org/2000/svg" width="73" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="73" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h56v20H0z"/><path fill="#4c1" d="M56 0h17v20H56z"/><path fill="url(#b)" d="M0 0h73v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="28" y="15" fill="#010101" fill-opacity=".3">tutorials</text><text x="28" y="14">tutorials</text><text x="63.5" y="15" fill="#010101" fill-opacity=".3">${countText}</text><text x="63.5" y="14">${countText}</text></g></svg>`
  else if (countLength < 3) return `<svg xmlns="http://www.w3.org/2000/svg" width="84" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="84" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h56v20H0z"/><path fill="#4c1" d="M56 0h28v20H56z"/><path fill="url(#b)" d="M0 0h84v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="28" y="15" fill="#010101" fill-opacity=".3">tutorials</text><text x="28" y="14">tutorials</text><text x="69" y="15" fill="#010101" fill-opacity=".3">${countText}</text><text x="69" y="14">${countText}</text></g></svg>`
  else if (countLength < 4) return `<svg xmlns="http://www.w3.org/2000/svg" width="87" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="87" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h56v20H0z"/><path fill="#4c1" d="M56 0h31v20H56z"/><path fill="url(#b)" d="M0 0h87v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="28" y="15" fill="#010101" fill-opacity=".3">tutorials</text><text x="28" y="14">tutorials</text><text x="70.5" y="15" fill="#010101" fill-opacity=".3">${countText}</text><text x="70.5" y="14">${countText}</text></g></svg>`
  else return `<svg xmlns="http://www.w3.org/2000/svg" width="94" height="20"><linearGradient id="b" x2="0" y2="100%"><stop offset="0" stop-color="#bbb" stop-opacity=".1"/><stop offset="1" stop-opacity=".1"/></linearGradient><mask id="a"><rect width="94" height="20" rx="3" fill="#fff"/></mask><g mask="url(#a)"><path fill="#555" d="M0 0h56v20H0z"/><path fill="#4c1" d="M56 0h38v20H56z"/><path fill="url(#b)" d="M0 0h94v20H0z"/></g><g fill="#fff" text-anchor="middle" font-family="DejaVu Sans,Verdana,Geneva,sans-serif" font-size="11"><text x="28" y="15" fill="#010101" fill-opacity=".3">tutorials</text><text x="28" y="14">tutorials</text><text x="74" y="15" fill="#010101" fill-opacity=".3">${countText}</text><text x="74" y="14">${countText}</text></g></svg>`
}

// Кароче заебись, тут потом сделаем серверную синхронизацию данных и главная страница всегда будет грузиться моментально с отрендереной хуйней на сервере.
// Здесь попробую получить список статей для главной страницы и всегда держать его в актуальном состоянии
// const ref = require('../shared/utils/firebase')
// let tutorials = []

// ref.child('tutorials').limitToFirst(10).on('value', (snap) => {
//   tutorials = snap.val()
//   console.log('tutorials: ', tutorials)
// })

// Server Side Rendering based on routes matched by React-router.
app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end('Internal server error')
    }

    if (!renderProps) {
      return res.status(404).end('Not found!')
    }

    const initialView = renderToString(<RouterContext {...renderProps} />)
    const initialState = {}

    res.status(200).end(renderFullPage(initialView, initialState))
  })
})

// start app
app.listen(serverConfig.port, (error) => {
  if (!error) {
    console.log(`Application is running on port: ${serverConfig.port}!`); // eslint-disable-line
  }
})

export default app
