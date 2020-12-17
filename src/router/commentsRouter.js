const express = require('express');
const { postComment, deleteComment } = require('../controller/bookController');

const router = express.Router();

router.post('/:id', postComment);
router.delete('/:commentId', deleteComment);

module.exports = router;