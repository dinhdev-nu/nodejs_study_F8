//route chung thay vì tạo 3 routes home, search, news...

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
router.get('/', siteController.home); // page /news HOME nên đặt sau /new/...

module.exports = router;
