class NewsController {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //------
    //[GET] /news/news-nóng
    //*bên news route không có index không khi sử funcition.....
    //*** router.use('/:slug', newController.index)
    show(req, res) {
        res.send('TIN MỚI TRONG NGÀY!!!');
    }

    //index, show là tên hàm đặt gì cũng đc
}

module.exports = new NewsController();

/*
function newsController (req, res) {
    res.render('news')
}


module.exports = newsController;
 
*bên news route không có index không khi sử funcition.....
*** router.use('/', newController)

*/
