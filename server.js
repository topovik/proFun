const express = require('express')
const next = require('next')
const routes = require('./routes');
const uri = require('./config/db').url;
const mongoose = require('mongoose');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect(uri, err => {
	if (err) throw err;
	console.log("Connected successfull")
})


app.prepare()
  .then(() => {
    const server = express()

    server.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.setHeader("Access-Control-Allow-Methods", "GET, POST");
      res.setHeader("Accept-Encoding", "gzip");
      next();
    })

    server.use(routes);

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
