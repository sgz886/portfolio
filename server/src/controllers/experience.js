const express = require('express')

const experience = require('../data/experience')

const LATENCY = 1000

const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => res.json(experience), LATENCY)
})

module.exports = router