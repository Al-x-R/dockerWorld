const express = require('express');
const {connectDb} = require('./helpers/db');
const {host, port, db} = require('./configs/index');
const mongoose = require('mongoose');

const app = express();

const postSchema = new mongoose.Schema({
    name: String,
});

const Post = mongoose.model("Post", postSchema);

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server running on the ${host}:${port}`);
        console.log(`Database is ${db}`);

        // Post.find((err, posts) => {
        //     if (err) {
        //         return console.error(err)
        //     }
        //     console.log('posts: ', posts)
        // })

        const silence = new Post({name: 'Silence'});
        console.log(silence.name);
        silence.save((err, savedPost) => {
            if (err) {
                return console.error(err);
            }
            console.log('savedPost silence with volumes', savedPost)
        });
    });
};

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly');
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);
