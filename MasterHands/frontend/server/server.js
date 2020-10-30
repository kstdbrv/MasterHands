import http from 'http'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router";
import App from '../src/App'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import rootReducer from '../src/store/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'




const ADDRESS = 'localhost'
const PORT = 8001

const app = express()
const server = http.Server(app)

// I've increased the limit of the max payload size in case a huge page
// needs to be rendered

app.on

app.get('/', function (req, res) {
  res.header("Content-Type", "text/html; charset=utf-8");
  res.end(ReactDOMServer.renderToString(

  ))
})

app.use(express.json())

app.post('/render', function (req, res) {
  // We haven't written this function yet, but we know what we want
  // its signiture to be

  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(thunk)     //теперь мы можем диспачить асинхронные события
    )
  )

  res.json({
    html: ReactDOMServer.renderToString(
    <Provider store={store}>
        <StaticRouter location={req.body.url}>
          <App />
        </StaticRouter>
    </Provider>),
  })
})

server.listen(PORT, ADDRESS, function () {
  console.log('Render server listening at http://' + ADDRESS + ':' + PORT)
})

