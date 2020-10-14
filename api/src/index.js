const express = require('express');
const {connectDb} = require('./helpers/db')
const {host, port, db} = require('./configs/index')


const app = express();

const startServer = () => {
    app.listen(port, () => {
        console.log(`Server running on the ${host}:${port}`);
        console.log(`Database is ${db}`)
    });
};

app.get('/test', (req, res) => {
    res.send('Our api server is working correctly');
});

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);
