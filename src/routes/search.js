const express = require('express');
const router = express.Router();

const searchController = require('../app/controllers/SearchsController');

router.get('/', searchController.search);

module.exports = router;
