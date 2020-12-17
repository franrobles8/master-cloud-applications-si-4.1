const express = require('express');
const bookRouter = require('./bookRouter');
const userRouter = require('./userRouter');
const commentsRouter = require('./commentsRouter');
const router = express.Router();

router.use('/books', bookRouter);
router.use('/users', userRouter);
router.use('/comments', commentsRouter);

module.exports = router;
