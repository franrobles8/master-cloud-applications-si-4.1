const express = require('express');
const { getUser, updateEmail, createUser, getComments } = require('../controller/userController');

const router = express.Router();

router.get('/:id', getUser);
router.get('/:id/comments', getComments);
router.post('/', createUser);
router.patch('/:id', updateEmail);

module.exports = router;
