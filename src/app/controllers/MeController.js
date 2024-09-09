const Courses = require('../models/Courses');

class MeController {

    // [GET] /me/store/courses
    storedCourses(req, res, next) {
        Promise.all([
                Courses.find().lean().sortable(req),
                Courses.countDocumentsWithDeleted({ deleted: true })
            ])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', { 
                    courses, 
                    deletedCount
                });
            })
            .catch(next); 
        }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Courses.findWithDeleted( { deleted:true } ).lean()
            .then(courses => res.render('me/trash-courses', { courses }))
            .catch(next);
    }
}

module.exports = new MeController();
