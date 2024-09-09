// Controller chung thay vì tạo 3 routes homeController, searchController, newsController...

const Courses = require('../models/Courses');

class SiteController {
    //[GET] /home  (await luôn đi cùng async function)
    // Promise
    home(req, res, next) {
        Courses.find({})
            .lean()
            .then((courses) => res.render('home', { courses })) // { courses } Truyền db sang file home.handlesbars để lấy dl
            .catch(next);
    }
    // Callback
    // async home(req, res) {
    //     try {
    //         const courses = await Course.find({});
    //         res.json(courses);
    //     } catch (err) {
    //         res.status(400).json({ error: "ERROR!!!" });
    //     }
    // }

    //------
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
