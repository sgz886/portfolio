const express = require('express')
const experience = require('../controllers/experience')
const information = require('../controllers/information')
const portfolio = require('../controllers/portfolio')
const project = require('../controllers/project')
const skill = require('../controllers/skill')


const baseUrl = '/api'

const router = express.Router()

router.use(baseUrl + '/v1/information', information)
router.use(baseUrl + '/v1/experience', experience)
router.use(baseUrl + '/v1/portfolio', portfolio)
router.use(baseUrl + '/v1/project', project)
router.use(baseUrl + '/v1/skill', skill)

module.exports = router