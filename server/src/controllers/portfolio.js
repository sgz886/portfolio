const express = require('express')

const portfolio = require('../data/portfolio')

const LATENCY = 1000

const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => res.json(portfolio), LATENCY)
})

module.exports = router