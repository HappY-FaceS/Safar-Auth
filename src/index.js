const express = require('express');
const {PORT} = require('./config/serverConfig');
const app =express();

const StartServer =() => {

    app.listen(PORT,()=> {
        console.log("server started at",PORT);
    });
}

StartServer();