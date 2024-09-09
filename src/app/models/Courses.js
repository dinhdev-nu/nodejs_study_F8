const mongoose = require('mongoose');
const { types } = require('node-sass');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const courseSchema = new Schema(
    {
        name: { type: String, maxLength: 100, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String },
        slug: { type: String },
        level: { type: String },
        videoID: { type: String, require: true },
    },
    { timestamps: true },
);

// sort database .sortable()
courseSchema.query.sortable = function (req) {
    if(req.query.hasOwnProperty('_sort')){
        const isValidtype = ['asc', 'desc'].includes(req.query.type)
        return this.sort({
            [req.query.column]: isValidtype ? req.query.type : 'desc',
        });
    }
    return this;
}

courseSchema.plugin(mongooseDelete, { 
        deletedAt : true,
        overrideMethods: 'all',
    }
);

module.exports = mongoose.model('Course', courseSchema);
