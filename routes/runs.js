const express = require('express')
const router = express.Router()

const runCtrl = require('../controllers/runs')

// localhost:3000/runs/
router.get('/', runCtrl.index)
router.get('/new', runCtrl.newRun)
router.post('/', runCtrl.create)

module.exports = router