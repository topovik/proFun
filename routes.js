const router = require('express').Router();
const titleModel = require('./mongoDb/title');
const articlesModel = require('./mongoDb/articles');
const fetch = require('isomorphic-unfetch');
const fs = require('fs');

router.get("/api/mainarticles", (req, res) => {
    titleModel.find({}).sort("-sort").limit(4).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/sliderarticles", (req, res) => {
    titleModel.find({}).limit(10).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/asidearticles", (req, res) => {
    titleModel.find({}).sort('-count').limit(5).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/:cnt/nextarticles", (req, res) => {
    let countArticles = Number(req.params.cnt);
    titleModel.find({}).sort('-sort').skip(countArticles).limit(4).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/search", (req, res) => {
    titleModel.find({}).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/:category/navigation", (req, res) => {
    titleModel.find({navigation: req.params.category}).limit(8).exec((err, articles) => {
        res.json(articles)
    })
})

router.get("/api/:category/:cnt/nextnavigation", (req, res) => {
    let countArticles = Number(req.params.cnt);
    titleModel.find({navigation: req.params.category}).skip(countArticles).limit(4).exec((err, articles) => {
        res.json(articles)
    })
})


router.get("/api/:id/article", (req, res) => {
    articlesModel.find({ id: req.params.id }, (err, articles) => {
        res.json(articles)

        titleModel.find({ id: req.params.id }, (err, out) => {
            let data = out.map(t => t.count)
            titleModel.update({ id: req.params.id }, { count: ++data },
                err => {
                    if (err) throw err
                })
        })

    })
})

router.get("/api/:lat/:lon/weather", (req, res) => {
    let lat = req.params.lat.slice(0, 6);
    let lon = req.params.lon.slice(0, 6);
    fetch(`https://api.darksky.net/forecast/b511e8664d4adaa44c598fd38f6ab6d7/${lat},${lon}?exclude=hourly,daily,flags&units=si`)
        .then(response => response.json())
        .then(item => {
            res.json({
                town: item.timezone,
                icon: item.currently.icon,
                temp: item.currently.temperature
            })
        })
})

module.exports = router;