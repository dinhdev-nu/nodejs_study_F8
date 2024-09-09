const Courses = require('../models/Courses');

function createSlug(name) {
    return name
        .toLowerCase() // Chuyển thành chữ thường
        .trim() // Loại bỏ khoảng trắng ở đầu và cuối
        .normalize('NFD') // Chuẩn hóa ký tự Unicode
        .replace(/[\u0300-\u036f]/g, '') // Loại bỏ dấu
        .replace(/[^a-z\s-]/g, '') // Loại bỏ các ký tự không phải chữ cái, khoảng trắng hoặc dấu gạch ngang
        .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
        .replace(/-+/g, '-'); // Loại bỏ dấu gạch ngang thừa
}

class CoursesController {
    //[GET]  /courses/slug
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .lean()
            .then((courses) => res.render('courses/show', { courses }))
            .catch(next);
    }

    //[GET]  /courses/create
    create(req, res, next) {
        res.render('courses/create');
    }
    //[POST]  /courses/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.videoID}/0.jpg`;
        formData.slug = createSlug(formData.name);
        const course = new Courses(formData);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses'))
            .catch((error) => {});
    }

    //[GET]  /courses/:id/edit
    edit(req, res, next) {
        Courses.findById(req.params.id).lean()
        .then(course => res.render('courses/edit', { course }))
        .catch(next);
    }

    //[PUT] //courses/:id
    update(req, res, next) {
        Courses.updateOne( { _id: req.params.id } , req.body)
        .then(course => res.redirect('/me/stored/courses'))
        .catch(next);
    }

    //[DELETE] //course/:id
    delete(req, res, next){
        Courses.delete( { _id: req.params.id } )
        .then(course => res.redirect('back'))
        .catch(next);
    }

    //[DELETE] //course/:id/force
    forceDelete(req, res, next){
        Courses.deleteOne( { _id: req.params.id } )
        .then(course => res.redirect('back'))
        .catch(next);
    }
    
    //[PATCH] //course/:id/restore
    restore(req, res, next){
        Courses.restore( { _id: req.params.id } )
        .then(course => res.redirect('back'))
        .catch(next);
    }
}

module.exports = new CoursesController();
