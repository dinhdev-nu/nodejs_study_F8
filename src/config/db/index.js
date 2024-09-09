// database Mongodb;
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_study_dev');
        console.log('Complete Succecfully!!!');
    } catch (error) {
        console.log('Complete Failury!!!');
    }
}

module.exports = { connect }; // {...} {} hàm ý là dữ liệu ojcect data
