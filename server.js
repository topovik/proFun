const express = require('express')
const next = require('next')
const routes = require('./routes');
const uri = require('./config/db').url;
const mongoose = require('mongoose');
const SitemapGenerator = require('sitemap-generator');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect(uri, { useNewUrlParser: true }, err => {
	if (err) throw err;
	console.log("Connected successfull")
})

const generator = SitemapGenerator('https://profun.app', {
	stripQuerystring: false,
	filepath: './static/sitemap.xml'
});

generator.on('done', () => {
	console.log('sitemap created')
});

generator.start();

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
    server.use(express.static('static'));
    server.use(express.static('static/weather'));

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    const robotsOptions = {
      root: path.join(__dirname, './static'),
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    };

    server.get('/robots.txt', (req, res) => (
      res.status(200).sendFile('robots.txt', robotsOptions)
    ))

    const sitemapOptions = {
      root: path.join(__dirname, './static'),
      headers: {
        'Content-Type': 'text/xml;charset=UTF-8',
      }
    };

    server.get('/sitemap.xml', (req, res) => (
      res.status(200).sendFile('sitemap.xml', sitemapOptions)
    ));

    const faviconOptions = {
      root: path.join(__dirname, './static/weather')
    };

    server.get('/favicon.ico', (req, res) => {
      res.status(200).sendFile('favicon.ico', faviconOptions)
    });

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })