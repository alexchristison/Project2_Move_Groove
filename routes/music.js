const express = require('express')
const router = express.Router()

const musicCtrl = require('../controllers/music')

// localhost:3000/music
router.get('/', musicCtrl.index)
router.get('/new', musicCtrl.newMusic)
router.post('/', musicCtrl.create)

module.exports = router