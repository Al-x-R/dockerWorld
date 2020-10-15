const express = require('express');
const {connectDb} = require('./helpers/db');
const {host, port, db} = require('./configs/index');

const app = express();


const startServer = () => {
    app.listen(port, () => {
        console.log(`Auth server running on the ${host}:${port}`);
        console.log(`Database is ${db}`);
        });
};

app.get('/test', (req, res) => {
    res.send('Our auth server is working correctly');
});

app.get('/api/currentUser', (req, res) => {
    res.json({
        id: '123',
        email: 'test@email.com'
    })
})

connectDb()
    .on('error', console.log)
    .on('disconnect', connectDb)
    .once('open', startServer);
