const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../config/auth');

// POST /runs/:id/comments (create comment for a run)
router.post('/runs/:id/comments', auth, commentsCtrl.create);
// DELETE / comments
router.delete('/comments/:id', auth, commentsCtrl.delete);

module.exports = router;
