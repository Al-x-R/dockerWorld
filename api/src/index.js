const express = require('express');
const {connectDb} = require('./helpers/db');
const {host, port, db, authApiUrl} = require('./configs/index');
const mongoose = require('mongoose');
const axios = require('axios');

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
            console.log('savedPost silence with volumes', savedPost);
        });
    });
};

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly');
});

app.get('/api/testapidata', (req, res) => {
    res.json({
        testWithApi: true,
    });
});

app.get('/testcurrentuser', (req, res) => {
    axios.get(authApiUrl + '/currentUser').then(response => {
        res.json({
            testcurrentuser: true,
            currentUserFromAuth: response.data,
        });
    });

});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);
