const express = require('express')

const skill = require('../data/skill')

const LATENCY = 1000

const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => res.json(skill), LATENCY)
})

module.exports = router