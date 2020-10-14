const mongoose = require('mongoose');
const {db} = require('./../configs/index');

module.exports.connectDb = () => {
    mongoose.connect(db, {useNewUrlParser: true});
    return mongoose.connection;
};