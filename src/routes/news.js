const express = require('express');
const router = express.Router();

const newController = require('../app/controllers/NewsController');
// newController.index

router.get('/:tin-tuc', newController.show); //:slug(giá trị chung /.../something = slug) đặt gì thì tùy ý vd /:tinmoi

router.get('/', newController.index); // page /news HOME nên đặt sau /new/...

module.exports = router;
