const express = require('express')
const router = express.Router()

const musicCtrl = require('../controllers/music')

// localhost:3000/music
router.get('/', musicCtrl.index)
router.get('/new', musicCtrl.newMusic)
router.post('/', musicCtrl.create)

router.get('/:id', musicCtrl.show)
router.get('/:id/edit', musicCtrl.updateMusicForm)
router.put('/:id', musicCtrl.update)
router.delete('/:id', musicCtrl.deleteMusic)

module.exports = router