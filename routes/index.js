var express = require('express')
var router = express.Router()
let axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {title: 'Express'})
})

router.get('/asic', function (req, res, next) {
  axios.get('http://whattomine.com/asic.json').then((response) => {
    res.json(response.data)
  }).catch((e) => {
    res.json(e)
  })// res.json(result)
})
router.get('/btc', function (req, res, next) {
  let hashrate = req.query.hashrate
  let power = req.query.power
  axios.get('http://whattomine.com/coins/1-btc-sha-256.json?hr=14000.0&p=1500.0&fee=0.0&cost=0.04&hcost=0.0&commit=Calculate').then((response) => {
    console.log(response.data)
    res.json(response.data)
  }).catch((e) => {
    console.log(e)
    res.json(e)
  })// res.json(result)
})
router.get('/l3', function (req, res, next) {
  axios.get('http://whattomine.com/coins/4-ltc-scrypt.json?hr=500.0&p=500.0&fee=0.0&cost=0.1&hcost=0.0&commit=Calculate').then((response) => {
    res.json(response.data)
  }).catch((e) => {
    res.json(e)
  })// res.json(result)
})
router.get('/alpha', function (req, res, next) {
  axios.get('http://whattomine.com/coins/151-eth-ethash.json?hr=84.0&p=405.0&fee=0.0&cost=0.1&hcost=0.0&commit=Calculate').then((response) => {
    res.json(response.data)
  }).catch((e) => {
    res.json(e)
  })// res.json(result)
})

module.exports = router
