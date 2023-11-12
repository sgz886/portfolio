const express = require('express')

const project = require('../data/project')

const LATENCY = 1000

const router = express.Router()

router.get('/', (req, res) => {
  setTimeout(() => res.json(project), LATENCY)
})

module.exports = router