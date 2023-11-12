const express = require('express')

const information = require('../data/information')

const LATENCY = 1000

const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => res.json(information), LATENCY)
})

module.exports = router