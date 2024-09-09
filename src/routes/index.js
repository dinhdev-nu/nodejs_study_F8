const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const searchRouter = require('./search');
const meRouter = require('./Me');

function route(app) {
    app.use('/me', meRouter);
    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/search', searchRouter);
    app.use('/', siteRouter); // //home là trang chủ : 1: đặt cuối 2:có thể '/' thay '/home' 3: site gồm(home và search) nên ko cần /search
}

module.exports = route;
