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
